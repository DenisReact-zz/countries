import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SceletonPageCountry from "../../components/PageCountry/SceletonPageCountry";
import PageCountry from "../../components/PageCountry";
import { Obj } from "../../types";
import { useSelector } from "react-redux";

const Country = () => {
  const countriesState = useSelector((state: Obj) => state.countries);
  const params = useParams();

  const [delayHasPassed, setdelayHasPassed] = useState(false);
  const [currentCountry, setCurrentCountries] = useState<Obj>({});
  useEffect(() => {
    if (params?.country && countriesState) {
      const findCountry = countriesState.find(
        (el: Obj) => el?.name?.common === params?.country
      );
      if (!!findCountry) {
        setCurrentCountries(findCountry);
        setdelayHasPassed(true);
      }
    }
  }, [countriesState]);

  useEffect(() => {
    setTimeout(() => {
      setdelayHasPassed(true);
    }, 3000);
  }, []);

  const сonditionSceleton = Object.keys(currentCountry) && !delayHasPassed;
  const сonditionLoadData = Object.keys(currentCountry) && delayHasPassed;

  return (
    <Box
      sx={{
        width: "1000px",
        ml: "auto",
        mr: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {сonditionSceleton ? (
        <SceletonPageCountry />
      ) : сonditionLoadData ? (
        <PageCountry dataCountry={currentCountry} />
      ) : (
        <Typography sx={{ mt: 3 }} variant="h4">
          Country not found
        </Typography>
      )}
    </Box>
  );
};

export default Country;
