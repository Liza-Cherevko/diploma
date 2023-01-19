import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";

const  theme = createTheme({
    palette: {
        primary: {
          // Purple and green play nicely together.
          main: purple[500],
        },
        secondary: {
          // This is green.A700 as hex.
          main: '	#696969',
        },
      },
})
export default  theme
// export default function Palette() {
//     return (
//       <ThemeProvider theme={theme}>
//         <Button>Primary</Button>
//         <Button color="secondary">Secondary</Button>
//       </ThemeProvider>
//     );
//   }