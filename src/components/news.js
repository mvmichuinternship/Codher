import React, { useState } from "react";
import "./codher.css";
import "./news.css";
import { Divider, Typography,Card,Stack } from "@mui/material";
import Header from "./header";
import SideNav from "./sidenav";

const News = () => {
  const titles = [
    "Facebook rebrands to 'Meta' and focuses on the metaverse",
    "Apple launches its new mixed reality headset",
    "Google announces its new Pixel 7 smartphone",
    "SpaceX launches more Starlink satellites",
    "Microsoft acquires Nuance Communications",
    "Tesla unveils new electric vehicle models",
    "IBM releases new quantum computer",
  ];
  const news = [
    "In a major rebranding move, Facebook announced that it is changing its parent company name to 'Meta' to reflect its new focus on building the metaverse, a virtual world where people can interact in real-time using virtual and augmented reality technologies.",
    "Apple unveiled its first mixed reality headset, which combines virtual and augmented reality technologies to create immersive experiences for users. The headset is expected to be released in the coming months.",
    "Google unveiled its latest smartphone, the Pixel 7, which features a high-resolution display, improved camera technology, and faster processing speeds.",
    "SpaceX launched another batch of its Starlink satellites, bringing the total number of satellites in orbit to over 1,500. The company aims to provide global internet coverage using the satellites.",
    "Microsoft announced that it is acquiring Nuance Communications, a company that specializes in artificial intelligence-powered speech recognition technology. The acquisition is expected to help Microsoft improve its own AI capabilities.",
    "Tesla announced new electric vehicle models, including a compact SUV and a pickup truck. The new models are expected to hit the market in the coming years.",
    "IBM launched its latest quantum computer, the IBM Quantum System Two, which is designed to tackle complex computational problems that are difficult or impossible to solve using traditional computing methods.",
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (

    <div >
        <Stack direction="column" >
      <Header />
      <Stack direction="row" spacing={10}>
        <SideNav />
    <div className="container" style={{alignItems:"center", justifyContent:"space-between", paddingTop:"3%"}}>
        
      {titles.map((title, index) => (
        <div key={index}>
            <Card elevation={3} sx={{padding:"5%", backgroundColor:"#FFF3E2"}}>
          <Typography variant="h5" sx={{ color: "", textAlign: "justify" }}>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "justify" }}
            className="text"
          >
            {expandedIndex === index
              ? news[index]
              : news[index].slice(0, 150) + "..."}
            {news[index].length > 150 && (
              <span
                onClick={() => toggleReadMore(index)}
                className="read-or-hide"
              >
                {expandedIndex === index ? "show less" : "read more"}
              </span>
            )}
          </Typography>
          </Card>
          <Divider  sx={{ my: 5 }}/>
          
        </div>
      ))}
      
    </div>
    </Stack>
    </Stack>
    </div>
  );
};

export default News;
