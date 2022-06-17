import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { Link } from "react-router-dom";

interface CardCountryProps {
  countryName: string;
  flagImg: string;
  link: string | undefined;
}

const CardCountry: FC<CardCountryProps> = ({ countryName, flagImg, link }) => {
  return (
    <>
      {link && (
        <Link to={`/country/${link}`}>
          <Box
            sx={{
              cursor: "pointer",
              position: "relative",
              display: "flex",
              width: "100%",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              background: `rgba(0,0,0,0.4)`,
              boxShadow: "3px 3px 8px rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "space-between",
              p: "15px",
              boxSizing: "border-box",
              mb: 5,
              transition: ".4s",
              "&:hover": {
                background: `rgba(0,0,0,0.5)`,
              },
            }}
          >
            <Typography color="white">
              {countryName === "Russia" ? "Terrorists" : countryName}
            </Typography>
            <img
              style={{ borderRadius: "10px", height: "50px" }}
              src={flagImg}
              alt={`${countryName}_flag`}
            />
          </Box>
        </Link>
      )}
    </>
  );
};

export default CardCountry;
