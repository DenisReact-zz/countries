import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";
import styles from "./PageCountry.module.css";

const SceletonPageCountry = () => {
  return (
    <>
      <Skeleton
        sx={{ mt: 5 }}
        animation="wave"
        height={56}
        width={400}
        variant="text"
      />

      <Box
        className={styles.topBlock}
        sx={{
          width: "100%",
          display: "flex",
          mt: 8,
          mb: 5,
        }}
      >
        <Skeleton
          className={styles.wrappFlag}
          sx={{ mr: 10 }}
          animation="wave"
          height={250}
          width={300}
          variant="rectangular"
        />

        <ul className={styles.sceletonUl}>
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
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
        <ul className={styles.sceletonUl}>
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
          <Skeleton animation="wave" height={27} width={300} variant="text" />
        </ul>
        <Skeleton
          className={styles.wrappGerb}
          sx={{ ml: "auto" }}
          animation="wave"
          height={300}
          width={300}
          variant="rectangular"
        />
      </Box>
    </>
  );
};

export default SceletonPageCountry;
