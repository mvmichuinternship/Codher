import React,{ useState } from 'react';
import { TextField, Button, Box,Tab} from '@mui/material';
import { TabContext,TabList,TabPanel } from '@mui/lab';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import './SchedulePlanner.css';
import { Stack } from '@mui/material';
import Event from './Event';
import { positions } from '@mui/system';
import SideNav from './sidenav';
import Header from './header';



function SchedulePlanner() {
  // state and event handler functions
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [events, setEvents] = useState([]);

  const handleNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleDateChange = (event) => {
    setEventDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setEventTime(event.target.value);
  };

  const handleLocationChange = (event) => {
    setEventLocation(event.target.value);
  };
 
  const date1= new Date(eventDate.value);
  const handleAddEvent = () => {
    const newEvent = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
    };
    setEvents([...events, newEvent]);
    setEventName('');
    setEventDate('');
    setEventTime('');
    setEventLocation('');
    
  };





  const label=["Week1","Week2","Week3","Week4"];
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  


  return (

    <Stack direction="column" >
      <Header />
      <Stack direction="row" spacing={10}>
        <SideNav />
    <Stack direction="row" sx={{ display:"flex", flexWrap:"wrap",width: '100%', justifyContent:"center",  padding:"3%", paddingTop:"10%" }}>
<Box sx={{ width: '75%', justifyContent:"center" }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Week 1" value="1" color='secondary'/>
           
            <Tab label="Week 2" value="2" />
            <Tab label="Week 3" value="3" />
            <Tab label="Week 4" value="4" />

          </TabList>
        </Box>
        
        <TabPanel value="1">{new Date(events.date).toString().slice(9,11) == "1"||"2"||"3"||"4"||"5"||"6"||"7" ? <Event events={events}/> : <br/>}</TabPanel>
        
        
        <TabPanel value="2">{new Date(events.date).toString().slice(9,11)== "8"||"9"||"10"||"11"||"12"||"13"||"14" ? <Event events={events}/> : <br/>}</TabPanel>
        
        <TabPanel value="3">{new Date(events.date).toString().slice(9,11)== "15"||"16"||"17"||"18"||"19"||"20"||"21" ? <Event events={events}/> : <br/>}</TabPanel>
        
        <TabPanel value="4"> {new Date(events.date).toString().slice(9,11)== "22"||"23"||"24"||"25"||"26"||"27"||"28"||"29"||"20"||"31"? <Event events={events}/> : <br/>}</TabPanel>
       

      </TabContext>
    </Box>
   


    <div >
      <form className="form">
        <Stack direction="column" sx={{padding:"10%", justifyContent:"space-between", alignItems:"space-between"}}>
        <TextField 
          label="Event Name"
          value={eventName}
          onChange={handleNameChange}
        />
        <TextField
          type="date"
          value={eventDate}
          onChange={handleDateChange}
        />
        <TextField
          type="time"
          value={eventTime}
          onChange={handleTimeChange}
        />
        <TextField
          label="Event Location"
          value={eventLocation}
          onChange={handleLocationChange}
          
        />
        <Button
          variant="contained"
          sx={{backgroundColor:"#FFF3E2"}}
          color="inherit"
          startIcon={<AddCircleIcon />}
          onClick={handleAddEvent}
        >
          Add Event
        </Button>
        </Stack>
      </form>
      {events.map((event, index) => (
        <div className="event" key={index}>
          <h3>{event.name}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
        </div>
      ))}
    </div>
    </Stack>
    </Stack></Stack>
  );
      }


export default SchedulePlanner;
