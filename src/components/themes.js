import React from "react";
import { createMuiTheme } from "@mui/material";

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



 export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#7289da',
            darker: '#053e85',
        },
        hello: {
            main: '#A267AC',
            darker: '#053e85',
            contrastText: '#fff'
        },
        rosana: {
            main: '#6867AC',
            darker: '#053e85',
            contrastText: '#fff',
        },
        neutral: {
            main: '#d1a4e5',
            contrastText: '#fff',
        },
        violet: {
            main: '#FFBCD1',
            contrastText: '#6867AC',
        }

    },
})

