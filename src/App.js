import React from 'react'
import NavBar from './components/NavBar'
import AboutPages from './pages/AboutPages';
import HomesPages from './pages/HomesPages'

const App = () => {
  return (
    <>
      <HomesPages/>  
      <AboutPages/>
    </>
  );
};

export default App