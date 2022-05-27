import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { Obj } from "../../types";
import styles from "./PageCountry.module.css";

interface PropsPageCountry {
  dataCountry: Obj;
}
const liCheck = (textLi: string, data: string | number | undefined) => {
  if (!data) return null;
  return (
    <li>
      {textLi}: <span>{data}</span>
    </li>
  );
};

const PageCountry: FC<PropsPageCountry> = ({ dataCountry }) => {
  const keysCurrencies =
    dataCountry?.currencies !== null && Object.keys(dataCountry?.currencies);
  const keysLanguages =
    dataCountry?.languages !== null && Object.keys(dataCountry?.languages);
  return (
    <>
      {dataCountry?.name?.common && (
        <Typography sx={{ mt: 5 }} variant="h3">
          {dataCountry?.name?.common}
        </Typography>
      )}

      <Box
        className={styles.topBlock}
        sx={{
          width: "100%",
          display: "flex",
          mt: 8,
          mb: 5,
        }}
      >
        {dataCountry?.flags?.svg && (
          <Box
            className={styles.wrappFlag}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              background: `rgba(0,0,0,0.8)`,
              boxShadow: "3px 3px 8px rgba(0,0,0,0.4)",
              height: "250px",
              width: "300px",
              mr: 10,
            }}
          >
            <img
              style={{
                width: "85%",
                borderRadius: "15px",
              }}
              src={dataCountry?.flags?.svg}
              alt="flag"
            />
          </Box>
        )}
        <ul className={styles.firstList}>
          {liCheck("Official name", dataCountry?.name?.official)}
          {liCheck("Domain(s)", dataCountry?.tld?.join(" "))}
          {liCheck("Status", dataCountry?.status)}
          {liCheck("Capital", dataCountry?.capital?.join(" "))}
          {liCheck("Region", dataCountry?.region)}
          {liCheck("Subregion", dataCountry?.subregion)}
          {liCheck("Borders", dataCountry?.borders?.join(", "))}
        </ul>
      </Box>
      <Box
        className={styles.bottomBlock}
        sx={{
          width: "100%",
          display: "flex",
          mt: 5,
          mb: 5,
        }}
      >
        <ul className={styles.secondList}>
          {liCheck("Population", dataCountry?.population)}
          {liCheck("Car move", dataCountry?.car?.side)}
          {liCheck("Timezones", dataCountry?.timezones?.join(", "))}
          {liCheck("Continents", dataCountry?.continents)}
          {liCheck("Start of week", dataCountry?.startOfWeek)}
          {liCheck("Independent", dataCountry?.independent ? "Yes" : "No")}
          {keysCurrencies &&
            keysCurrencies.length > 0 &&
            liCheck("Currencies", keysCurrencies.join(", "))}
          {keysLanguages &&
            keysLanguages.length > 0 &&
            liCheck("Languages", keysLanguages.join(", "))}
          {liCheck("Link of google map", dataCountry?.maps?.googleMaps)}
        </ul>

        {dataCountry?.coatOfArms?.svg && (
          <Box
            className={styles.wrappGerb}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              background: `rgba(0,0,0,0.8)`,
              boxShadow: "3px 3px 8px rgba(0,0,0,0.4)",
              height: "300px",
              width: "300px",
              ml: "auto",
            }}
          >
            <img
              style={{
                width: "85%",
                height: "85%",
                borderRadius: "15px",
                objectFit: "contain",
              }}
              src={dataCountry?.coatOfArms?.svg}
              alt="flag"
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default PageCountry;
