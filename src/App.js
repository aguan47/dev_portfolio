import { useState } from 'react';
import NavBar from './component/NavBar/NavBar';
import SocialMedia from './component/SocialMedia/SocialMedia';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactMe from './pages/ContactMe/ContactMe';
import Education from './pages/Education/Education';
import Experience from './pages/Experience/Experience';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';


function App() {
  const [activeNavBar, setActiveNavBar] = useState("HOME");
  const educationalBg = [
    {
      title: "University of the Philippines Los Baños",
      details: "BS Computer Science",
      years: "2018-2022",
      otherDetails: "Magna Cum Laude"
    }
  ];

  const experiences = [
    {
      title: "PayMaya Philippines, Inc",
      details: "Cadet Engineer",
      years: "August 2022 - Present",
      otherDetails: "Started working as a Cadet Engineer whose responsibilities include developing a POC, and attending bootcamps"
    },
    {
      title: "Razza Consulting Group, Inc",
      details: "Software Developer Intern",
      years: "June 2021 - August 2021",
      otherDetails: "We used ReactJS, ExpressJS, NodeJS, and MySQL as our tech stack"
    }
  ];

  const projects = [
    {
      projectName: "Audify",
      details: `It is a website whose goal is to be an audio journal. An audio journal is another great way to keep
      a journal. Instead of writing down your thoughts and feelings, you can just record how you're feeling
      at the moment. Audify can help users record their intimate thoughts, and they can write a relevant title
      and caption for each voice journal. Other than that, the user can also classify each journal based on how
      they're currently feeling by changing the colors associated with the journal.`,
      techStack: ["React", "Tailwind", "NodeJS", "Knex", "PostgreSQL", "Docker"],
      showCode: true,
      sourceCodeUrl: "https://github.com/aguan47/audify",
      showWebsite: true,
      websiteUrl: "https://audify-frontend.herokuapp.com"
    },
    {
      projectName: "Better Note App",
      details: `It is a web app where users can easily save checklists and notes. The user can add as many tasks 
      as they want to their checklist, while they can write as many notes as they want. In addition, they can change 
      the colors of each note or checklist to make it more organized. Lastly, the web app has a responsive design.`,
      techStack: ["CSS", "React"],
      showCode: true,
      sourceCodeUrl: "https://github.com/aguan47/BetterNoteApp",
      showWebsite: true,
      websiteUrl: "https://aguan47.github.io/BetterNoteApp/"
    },
    {
      projectName: "Developer Portfolio",
      details: `This shows essential information about me such as my side projects, educational background, work experience
      and other contact information. 
      `,
      techStack: ["CSS", "React"],
      showCode: true,
      sourceCodeUrl: "https://github.com/aguan47/dev_portfolio",
      showWebsite: true,
      websiteUrl: "https://aguan47.github.io/dev_portfolio/"
    },
    {
      projectName: "Friendbook",
      details: `This is a Facebook clone done as part of Odin Project's Ruby on Rails curriculum. The website allows 
      users to create posts, like posts, and add friends.`,
      techStack: ["CSS", "Ruby on Rails"],
      showCode: true,
      sourceCodeUrl: "https://github.com/aguan47/friendbook",
      showWebsite: false,
      websiteUrl: ""
    }
  ];


  return (
    <>
      <NavBar active={activeNavBar}/>
      <SocialMedia/>
      <Home setActiveItem={setActiveNavBar}/>
      <AboutMe setActiveItem={setActiveNavBar}/>
      <Projects setActiveItem={setActiveNavBar} projects={projects}/>
      <Experience setActiveItem={setActiveNavBar} experiences={experiences} />
      <Education setActiveItem={setActiveNavBar} educationalBg={educationalBg}/>
      <ContactMe setActiveItem={setActiveNavBar}/>
    </>
  );
}

export default App;
