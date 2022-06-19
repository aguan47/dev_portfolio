import { useState } from 'react';
import NavBar from './component/NavBar/NavBar';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
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
  ];

  const experiences = [
    {
      title: "Razza Consulting Group, Inc",
      details: "Web Developer",
      years: "September 2021 - December 2021",
      otherDetails: "We used ReactJS, ExpressJS, NodeJS, Docker and Google Cloud Platform as our tech stack"
    },
    {
      title: "Razza Consulting Group, Inc",
      details: "Software Developer Intern",
      years: "June 2021 - August 2021",
      otherDetails: "We used ReactJS, ExpressJS, NodeJS, and MySQL as our tech stack"
    }
  ]



  return (
    <>
      <NavBar active={activeNavBar} setActiveItem={setActiveNavBar}/>
      <Home setActiveItem={setActiveNavBar}/>
      <AboutMe setActiveItem={setActiveNavBar}/>
      <Experience setActiveItem={setActiveNavBar} experiences={experiences} />
      <Education setActiveItem={setActiveNavBar} educationalBg={educationalBg}/>
      <ContactMe setActiveItem={setActiveNavBar}/>
    </>
  );
}

export default App;
