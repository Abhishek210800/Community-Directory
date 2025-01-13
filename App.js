import './App.css';
import Home from './Component/Home';
import { useEffect, useRef } from 'react';
import {Routes , Route } from 'react-router-dom';
import { DirectoryProvider } from './ContextApi/DirectoryProvider';

function App() {
  const title=useRef()
  useEffect(()=>{
    // console.log(title.current);
    title.current.title="Panalink";
  })
  return (
    <DirectoryProvider>
    <div className="App" ref={title}>
      <Home />

      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="/EBN" element={<Home />}></Route>
      </Routes>
      

    </div>
    </DirectoryProvider>
  );
}

export default App;
