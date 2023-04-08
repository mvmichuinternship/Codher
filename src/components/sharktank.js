import React from 'react';

import Header from './header';
import SideNav from './sidenav';
import { Box, CardActionArea, CardContent, Typography, Card, Stack, CardMedia, CardActions, Button } from '@mui/material';




function SharkTank() {
    const heading =["Virtual Reality (VR) Fitness Studio","Sustainable Home Renovation and Remodeling","Personalized Online Learning Platform for Kids","Personalized Online Learning Platform", "Sustainable Fashion Rental Service","Indoor Vertical Farming","Virtual Reality (VR) Arcade","Digital Marketing and Social Media Consulting","Plant-Based Meal Delivery Service","Remote Work Tools and Solutions"];
    const description = [" A fitness studio that combines virtual reality technology with exercise routines for an immersive and interactive workout experience"," A home renovation and remodeling business that focuses on using eco-friendly and sustainable materials and practices to create environmentally responsible living spaces.","An online learning platform that offers personalized educational content and interactive tools for children to learn at their own pace and style.","An online learning platform that offers personalized and adaptive learning experiences for students of all ages and abilities.","A fashion rental service that offers sustainably made clothing and accessories for rent, promoting a circular economy and reducing fashion waste.","Growing crops in vertically stacked layers indoors, using controlled environments and LED lights, to produce fresh produce year-round in urban areas.","An entertainment venue that offers virtual reality experiences and games for customers to enjoy in a social and interactive setting.","Providing expert advice and strategies to businesses on digital marketing and social media to help them improve their online presence and reach their target audience."," Delivering plant-based, healthy, and delicious meals to customers' homes on a subscription basis, catering to those following a plant-based diet or seeking healthier meal options.","Developing and offering innovative tools, software, and services to support remote work and collaboration for individuals and businesses, addressing the growing trend of remote work and distributed teams."];
    const img = ["https://www.pexels.com/photo/easter-eggs-on-a-plain-background-4041122/","https://www.pexels.com/photo/a-swan-swimming-on-the-lake-8451490/","https://www.pexels.com/photo/tower-bridge-15520825/","https://www.pexels.com/photo/food-healthy-glass-table-15777495/","https://www.pexels.com/photo/sea-beach-water-ocean-15962125/"]


    return (

        <Stack direction="column" >
            <Header />
            <Stack direction="row" spacing={10}>
                <SideNav />

                <Stack direction="row" spacing={5} sx={{ padding: "10%", borderRadius: "10px", maxWidth: "100%", justifyContent: "center", alignItems: "center" }} >
                    <Card className='card' elevation={3} sx={{ width: "150%", height: "80%" }}>
                        <CardMedia
                            component="img"
                            height="350"
                            width="50%"
                            image=""
                            alt="card3"
                        /></Card>

                    <Stack direction="column">

                        <Typography color="#A267AC" variant="h3" gutterBottom sx={{ padding: "5%", justifyContent: "center", alignItems: "center", textAlign: "justify" }}>
                            Heading!  Quos blanditiis tenetur
                        </Typography>
                        <Typography color="#A267AC" variant="body2" gutterBottom sx={{ padding: "5%", justifyContent: "center", alignItems: "center", textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                    </Stack>
                </Stack>
                </Stack>

                <Box sx={{ alignItems: "center", justifyContent: "center", padding: "50px", display: "flex", flexWrap: "wrap", paddingTop:"10%", paddingLeft:"6%"}}>
          {[...Array(heading.length)].map((_, index) => (
            <Card  className='card' sx={{ width: "300px", height: "350px", margin: "20px", position: "relative", backgroundColor:"#FFF3E2", }} key={index}>
              <CardMedia
                className='media'
                component="img"
                height="150"
                src={img[index]}
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
              {/* <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                <Button variant='outlined' color='secondary' sx={{backgroundColor:"#FA9884"}} size="small" href={links[index]}>Take a Look</Button>
              </CardActions> */}
            </Card>
          ))}
        </Box>
          
        </Stack>
    )
}
export default SharkTank;