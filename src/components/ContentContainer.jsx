import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";
import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 12, md: 9, lg: 9, xl: 10 }}
      sx={{ backgroundColor: grey[800] }}
    >
      {children}
    </Grid>
  );
};

export default ContentContainer;
