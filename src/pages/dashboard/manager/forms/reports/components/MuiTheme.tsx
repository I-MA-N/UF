import { createTheme, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

function MuiTheme({ children }: PropsWithChildren) {
   const theme = createTheme({
      direction: 'rtl',
      typography: {
         fontFamily: 'inherit'
      },
      palette: {
         primary: {
            main: "#083C5A"
         },
         secondary: {
            main: "#4CB648"
         },
      },
   })

   return (
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
   );
};

export default MuiTheme;