import { Box, Typography } from "@mui/material";

const TabPanel = (props) => {
  const { children, value, index, ...others } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-controls={`sidebar-tab-${index}`}
      {...others}
    >
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
};

export default TabPanel;
