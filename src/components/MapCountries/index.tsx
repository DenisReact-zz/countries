import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MapComponent from "./MapComponent";

export interface Point {
  [key: string]: any;
}

interface PropsMap {
  onHiddenMap: () => void;
  points: Point[];
}

const MapCountries: FC<PropsMap> = ({ onHiddenMap, points }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        left: "0",
        top: "0",
        zIndex: "3",
      }}
    >
      <Box
        onClick={onHiddenMap}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(5px)",
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          width: "90%",
          height: "90%",
          zIndex: "1",
          borderRadius: 3,
          background: "white",
          boxShadow: "4px 4px 16px rgba(0,0,0,0.6)",
          overflow: "hidden",
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
            zIndex: "1",
            borderRadius: 3,
          }}
          onClick={onHiddenMap}
        >
          <CloseOutlinedIcon sx={{ width: "20px", height: "20px", p: 0.5 }} />
        </Button>
        <MapComponent points={points} />
      </Box>
    </Box>
  );
};

export default MapCountries;
