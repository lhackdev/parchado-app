import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette : {
        primary : {
            main : '#0C243D'
        },
        secondary: {
            main: '#543884'
        },
        white: {
            main: '#FFFFFF'
        },
        error: {
            main: red.A400
        }
    }
})