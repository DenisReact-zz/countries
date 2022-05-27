import { Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Typography
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      variant="h2"
      component="h2"
    >
      404
    </Typography>
  );
};

export default PageNotFound;
