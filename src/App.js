import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Container from './component/Container/Container';
import NavBar from './component/NavBar/NavBar';
import Home from './pages/Home/Home';


function App() {
  const [activeNavBar, setActiveNavBar] = useState("HOME");


  return (
    <>
      <NavBar active={activeNavBar} setActiveItem={setActiveNavBar}/>
      <AnimatePresence>
        <Home/>
      </AnimatePresence>
    </>
  );
}

export default App;
