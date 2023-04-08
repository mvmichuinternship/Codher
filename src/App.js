

import Home from './components/home';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import News from './components/news'
import SchedulePlanner from './components/schedule';
import SharkTank from './components/sharktank';
import Courses from './components/courses';
import Coursecurriculum from './components/coursecurriculum';
import Demo from './components/signup'

function App() {


  
  return (
    <div className="App">
     
     <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/news" element={<News/>} />
        {/* <Route path="/contests" element={<Contests/>} />
        <Route path="/games" element={<Games/>} />
  <Route path="/career_guidance" element={<Career/>} />*/}
        
        <Route path="/courses" element={<Courses/>} />
        <Route path="/coursecurriculum" element={<Coursecurriculum/>} /> 
        <Route path="/signup" element={<Demo/>} /> 
        <Route path="/sharktank" element={<SharkTank/>} />
       <Route path="/schedule" element={<SchedulePlanner/>} />



       

        </Routes>
        </Router>
    </div>
  );
}

export default App;
