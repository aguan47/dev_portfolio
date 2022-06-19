import { useState } from 'react';
import NavBar from './component/NavBar/NavBar';
import AboutMe from './pages/AboutMe/AboutMe';
import Education from './pages/Education/Education';
import Home from './pages/Home/Home';


function App() {
  const [activeNavBar, setActiveNavBar] = useState("HOME");
  const educationalBg = [
    {
      title: "University of the Philippines Los Baños",
      details: "BS Computer Science",
      years: "2018-2022",
      otherDetails: "Magna Cum Laude candidate"
    },
    {
      title: "STI College Sta. Cruz",
      details: "Science, Technology, Engineering and Mathematics (STEM)",
      years: "2016-2018",
      otherDetails: "High Honors"
    },
    {
      title: "Pedro Guevara Memorial National High School",
      details: "Special Science Curriculum",
      years: "2012-2016",
      otherDetails: ""
    }
  ]



  return (
    <>
      <NavBar active={activeNavBar} setActiveItem={setActiveNavBar}/>
      <Home setActiveItem={setActiveNavBar}/>
      <AboutMe setActiveItem={setActiveNavBar}/>
      <Education setActiveItem={setActiveNavBar} educationalBg={educationalBg}/>
    </>
  );
}

export default App;
