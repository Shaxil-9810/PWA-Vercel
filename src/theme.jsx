import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    // Add other palette colors if needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          "&:hover": {
            backgroundColor: "#7860F7",
            color: "#ffffff",
          },
          // Add styling for the contained state when not hovering
          background: "black", // Replace with your desired color
          color: "white", // Replace with your desired color
        },
        outlined: {
          borderColor: "#252A48",
          // Replace with your desired color
          color: "#252A48", // Replace with your desired color
          "&:hover": {
            backgroundColor: "#7860F7",
            color: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
