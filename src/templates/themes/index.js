import { createTheme } from "@mui/material";

/**NOTE
 * Create Custom Theme
 */
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: { main: "#8BE9FD" },
    secondary: { main: "#FF79C6" },
    error: { main: "#FF5555" },
    warning: { main: "#F1FA8C" },
    success: { main: "#50FA7B" },
  },
  typography: {
    fontFamily: "vazir, roboto",
    allVariants: { color: "#FFFFFF" },
  },
});
