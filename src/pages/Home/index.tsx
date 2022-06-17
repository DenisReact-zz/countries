import { MapOutlined } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { Box } from "@mui/system";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCountriesByName } from "../../api/getCountries";
import CardCountry from "../../components/CardCountry";
import MapCountries from "../../components/MapCountries";
import { Obj } from "../../types";
import styles from "./Home.module.css";

type errorsSearch = "Country not found" | "";

const Home = () => {
  const theme = useTheme();
  //For search
  const [valueInput, setValueInput] = useState("ukraine");
  const [currentCountries, setCurrentCountries] = useState([]);
  const [errorSearch, setErrorSearch] = useState<errorsSearch>("");
  const changeValueInput = (event: Obj) => {
    const target = event?.target as HTMLTextAreaElement;
    if (target?.value) {
      setValueInput(target.value);
    }
  };
  const debouncedChangeHandler = useCallback(
    debounce(changeValueInput, 300),
    []
  );
  useEffect(() => {
    const addContries = async () => {
      if (valueInput?.length < 1) return;
      try {
        const result = await getCountriesByName(valueInput);
        if (result?.status) throw new Error();
        setErrorSearch("");
        setCurrentCountries(result);
      } catch (e) {
        setErrorSearch("Country not found");
        setCurrentCountries([]);
      }
    };
    addContries();
  }, [valueInput]);

  //Map
  const [openMap, setOpenMap] = useState(false);
  const handleChangeOpenMap = () => setOpenMap(!openMap);

  const [countriesArr, setCountriesArr] = useState([]);
  const countriesState = useSelector((state: Obj) => state.countries);
  useEffect(() => {
    setCountriesArr(countriesState);
  }, [countriesState]);

  return (
    <>
      <Typography
        sx={{ pr: 5, pl: 5, mt: 5, mb: 5, textAlign: "center" }}
        variant="h3"
        component="h3"
      >
        Information about all countries
        <span style={{ color: theme.palette["primary"].main }}> here</span>
      </Typography>
      <TextField
        defaultValue="ukraine"
        className={styles.search}
        InputLabelProps={{ shrink: true }}
        autoFocus
        onChange={debouncedChangeHandler}
        sx={{ mb: 2, borderRadius: 3 }}
        label="Find country"
        variant="outlined"
      />
      <Button
        onClick={handleChangeOpenMap}
        sx={{ mb: 7, borderRadius: 3 }}
        variant="contained"
        endIcon={<MapOutlined />}
      >
        Open the interactive map
      </Button>
      <Box className={styles.wrapperCards}>
        {currentCountries?.length > 0 && errorSearch?.length === 0 ? (
          currentCountries
            .slice(0, 10)
            .map((el: Obj, index) => (
              <CardCountry
                key={`${index}_country_search`}
                link={el?.name?.common}
                countryName={el?.name?.common ? el?.name?.common : ""}
                flagImg={el?.flags?.svg ? el?.flags?.svg : ""}
              />
            ))
        ) : (
          <Typography>{errorSearch}</Typography>
        )}
        {openMap && !!countriesArr.length && (
          <MapCountries
            onHiddenMap={handleChangeOpenMap}
            points={countriesArr}
          />
        )}
      </Box>
    </>
  );
};

export default Home;
