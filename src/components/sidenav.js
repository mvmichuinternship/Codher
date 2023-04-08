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

export default function SideNav() {
    return (
        <div className='sideNav'>

        <Stack direction="column" >
            <IconButton
                size="large"
                edge="start"
                className='btn'
                color='inherit'
                href='/'
                aria-label=""
                sx={{ mr: 2 }}
            >
                <DashboardIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                href='/mycourses'
                className='btn icon'
                color='inherit'
                aria-label=""
                sx={{ mr: 2 }}
            >
                <AutoAwesomeMotionIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                className='btn'
                href='/myprojects'
                color='inherit'
                aria-label=""
                sx={{ mr: 2 }}
            >
                <AssignmentIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                className='btn'
                href='/myteams'
                color='inherit'
                aria-label=""
                sx={{ mr: 2 }}
            >
                <Groups3Icon /></IconButton>
            <IconButton
                size="large"
                edge="start"
                className='btn'
                color='inherit'
                href='schedule'
                aria-label=""
                sx={{ mr: 2 }}
            >
                <CalendarMonthIcon />
            </IconButton>
        </Stack>

    </div>
    )}