import { useState } from 'react';
import Container from './component/Container/Container';
import NavBar from './component/NavBar/NavBar';


function App() {
  const [activeNavBar, setActiveNavBar] = useState("HOME");


  return (
    <Container>
      <NavBar active={activeNavBar} setActiveItem={setActiveNavBar}/>
    </Container>
  );
}

export default App;
