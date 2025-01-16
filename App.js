import './App.css';
import Home from './Component/Home';
import { useEffect, useRef } from 'react';
import { DirectoryProvider } from './ContextApi/DirectoryProvider';


function App() {
  const title=useRef()
  useEffect(()=>{
    title.current.title="Panalink";
  })
  return (
    <DirectoryProvider>
    <div className="App" ref={title}>
      <Home />
    </div>
    </DirectoryProvider>
  );
}

export default App;
