import { Box, CardActionArea, AccordionSummary,CardContent, Typography, Card, Stack, CardMedia, CardActions, Button, Container, Accordion, AccordionDetails } from '@mui/material';
import { height, maxHeight, width } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react';
import Header from './header';
import SideNav from './sidenav';
import './codher.css';

export default function Coursecurriculum() {

    const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const descriptions = [
    "Introduction to React",
    "Components and Props",
    "State and Lifecycle Methods",
    "Event Handling and Forms"
  ];
  const text = [
    "This week we will introduce you to React and discuss its key concepts and features.",
    "In this week, you will learn about React components and props, and how to use them to build reusable UI elements.",
    "This week we will cover state and lifecycle methods in React, and how they can be used to build dynamic applications.",
    "In this final week, we will explore event handling and forms in React, and show how to create interactive user interfaces."
  ];

//   const panel = ["panel1", "panel2", "panel3", "panel4"];
//   const panelcontent = ["panel1bh-content", "panel2bh-content", "panel3bh-content", "panel4bh-content"];
//   const panelheader = ["panel1a-header", "panel2a-header", "panel3a-header", "panel4a-header"];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
        <Stack direction="column" >
            <Header />
            <Stack direction="row" spacing={10}>
                <SideNav />
                <Box sx={{ justifyContent: "center", alignItems: "center", paddingLeft: "12%", paddingTop: "5%" }}>

                    <Stack direction="row" sx={{ justifyContent: "center", alignItems: "center", paddingLeft: "7%", paddingTop: "5%" }}>

                        <Card sx={{ width: "600px", height: "300px", alignItems: "" }}>
                            <CardContent>
                                <Typography variant="h5" color="text.secondary" gutterBottom>
                                    What you'll learn
                                </Typography>
                                <Stack direction="row">
                                    <Typography variant="body2" component="div">
                                        * Build various deep learning agents (including DQN and A3C)<br />
                                        * Q-Learning with Deep Neural Networks<br />
                                        * Reinforcement Learning with RBF Networks<br />


                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
                                        * Apply a variety of advanced reinforcement learning algorithms to any problem<br />
                                        * Policy Gradient Methods with Neural Networks<br />
                                        * Use Convolutional Neural Networks with Deep Q-Learning<br />
                                    </Typography>
                                </Stack>
                            </CardContent>

                        </Card>
                        <Box sx={{ alignItems: "center", justifyContent: "end", padding: "50px", display: "flex", flexWrap: "wrap", paddingTop: "10%" }}>
                            <Card className='card' sx={{ width: "100%", height: "600px", margin: "20px", position: "static", backgroundColor: "#FFF3E2" }}>
                                <CardMedia
                                    className='media'
                                    component="video"
                                    height="150"
                                    src=""
                                    alt=""
                                />
                                <CardContent sx={{ justifyContent: "center", textAlign: "center" }}>
                                    <Typography color="#A267AC" gutterBottom variant="h5" component="div" justifyContent="center">

                                    </Typography>

                                    <Typography color="#A267AC" variant="body2" justifyContent="center" alignItems="center">

                                    </Typography>

                                </CardContent>
                                {/* <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                <Button variant='outlined' color='secondary' sx={{backgroundColor:"#FA9884"}} size="small" href={}>Take a Look</Button>
              </CardActions> */}
                            </Card>
                        </Box>
                    </Stack>
                    <Box sx={{ paddingBottom: "5%" }}>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        Course Curriculum
      </Typography>
      {weeks.map((week, index) => (
        <div key={index}>
          <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}a-header`}>
                  <Typography variant="h5" sx={{ mr: 2 }}>
                    {week}
                  </Typography>
                  <Typography variant="h6">{descriptions[index]}</Typography>

                 
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant="h6">{text[index]}</Typography>
                </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </Box>
                </Box>

            </Stack>
        </Stack>
    )
}
