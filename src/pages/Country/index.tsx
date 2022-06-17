import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import SceletonPageCountry from "../../components/PageCountry/SceletonPageCountry";
import PageCountry from "../../components/PageCountry";
import { Obj } from "../../types";
import { useSelector } from "react-redux";
import styles from "./Country.module.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

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
    <>
      <Link to="/">
        <Button
          sx={{
            position: "absolute",
            left: "10px",
            top: "10px",
            borderRadius: 3,
          }}
          variant="outlined"
        >
          <ArrowBackIosNewOutlinedIcon sx={{ height: "15px" }} />
          Back
        </Button>
      </Link>
      <Box
        className={styles.countryWrapper}
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
    </>
  );
};

export default Country;
