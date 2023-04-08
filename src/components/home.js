import { Box, CardActionArea, CardContent, Typography, Card, Stack, CardMedia, CardActions, Button } from '@mui/material';
import { height, maxHeight, width } from '@mui/system';
import React from 'react';
import Header from './header';
import SideNav from './sidenav';
import './codher.css';

export default function Home() {

  const heading = ["Educational News", "Contests", "Games", "Career Guidance", "Shark Tank", "Courses"];
  const description = ["Your daily boost of tch goes here", "Wanna boost up your skills", "Fun, fun and fun only!", "Not sure what to choose?", "Launch your startup now!", "Explore a wide domain of courses!"];
  const links = ["/news", "/contests", "/games", "/career_guidance", "/sharktank", "/courses"];

  return (
    <Stack direction="column" >
      <Header />
      <Stack direction="row" spacing={10}>
        <SideNav />

        <Box sx={{ alignItems: "center", justifyContent: "center", padding: "50px", display: "flex", flexWrap: "wrap", paddingTop:"10%"}}>
          {[...Array(heading.length)].map((_, index) => (
            <Card  className='card' sx={{ width: "300px", height: "350px", margin: "20px", position: "relative", backgroundColor:"#FFF3E2" }} key={index}>
              <CardMedia
                className='media'
                component="video"
                height="150"
                src=""
                alt={`card${index}`}
              />
              <CardContent sx={{ justifyContent: "center", textAlign:"center" }}>
                <Typography color="#A267AC" gutterBottom variant="h5" component="div" justifyContent="center">
                  {heading[index]}
                </Typography>

                <Typography color="#A267AC" variant="body2" justifyContent="center" alignItems="center">
                  {description[index]}
                </Typography>

              </CardContent>
              <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                <Button variant='outlined' color='secondary' sx={{backgroundColor:"#FA9884"}} size="small" href={links[index]}>Take a Look</Button>
              </CardActions>
            </Card>
          ))}
        </Box>

      </Stack>
    </Stack>
  )
}
