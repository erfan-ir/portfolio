import { useState } from "react";
import Grid from "@mui/material/Grid2";

import { grey, pink } from "@mui/material/colors";
import DrawerContent from "./DrawerContent";
import { Drawer, Fab, Box } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Grid
      size={{ xs: 0, sm: 0, md: 3, lg: 3, xl: 2 }}
      sx={{ backgroundColor: grey[900] }}
    >
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          variant="circular"
          aria-label="Sidebar"
          size="small"
          sx={{ m: 2, backgroundColor: pink[400], color: grey[100] }}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <MenuRounded />
        </Fab>
      </Box>
      <DrawerContent value={value} handleChange={handleChange} />
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { width: 300 },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </Grid>
  );
};

export default Sidebar;
