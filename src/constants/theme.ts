import { createTheme, ThemeProvider  } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#000',
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#FFC107",
    },
    background: {
      default: "#F5F5F5",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1400,
    },
  },
});
