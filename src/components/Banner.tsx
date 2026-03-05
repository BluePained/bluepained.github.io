import React from "react";
import { Box } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Box
      position="relative"
      minHeight="400px"
      height="1200px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        "@media (max-width:600px)": {
          height: "auto",
        },
      }}
    >
      <Box
        component="img"
        src="/Banner/Banner.gif"
        alt="Banner Background"
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
    </Box>
  );
};

export default Banner;
