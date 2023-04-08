import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "./themes";



export default function Demo(){
    return(
        <ThemeProvider theme={theme}><div className="demo"> <Box sx={{  height: "50%", justifyContent:"center", alignItems:"center", display:"block" }}>

    <Typography sx={{ paddingTop:"5%", marginBottom:"-1%" }} variant="h5" color="#6867AC">Request For A Demo</Typography>

        <TextField sx={{ marginTop:"5%", marginBottom:"3%", display:"block" }}
        placeholder='work email' 
        variant="outlined" size="small" color="rosana" />
  
        <Button sx={{ marginBottom:"5%" }}
        border variant="contained" color="rosana">
        live demo</Button>
  
      </Box></div></ThemeProvider>
    );
}