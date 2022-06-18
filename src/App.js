import { useState } from 'react';
import NavBar from './component/NavBar/NavBar';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';


function App() {
  const [activeNavBar, setActiveNavBar] = useState("HOME");


  return (
    <>
      <NavBar active={activeNavBar} setActiveItem={setActiveNavBar}/>
      <Home setActiveItem={setActiveNavBar}/>
      <AboutMe setActiveItem={setActiveNavBar}/>
    </>
  );
}

export default App;
