import React from 'react';
import './codher.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Groups3Icon from '@mui/icons-material/Groups3';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Stack } from '@mui/material';
import Demo from './signup';

export default function Header() {

    function handleclick(){
        <Demo/>
    }
    return (
        

            
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="fixed" sx={{zIndex:"1"}}>
                    <Toolbar className='appBar'>
                        
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft:"5%" }}>
                            Codher
                        </Typography>
                        <Button className='btn' color='inherit' href='/signup'>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>


      
    );
}