import React from "react";
import {Routes, Route} from 'react-router-dom';
import "./css/style.css";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import About from "./Page/About";
import Panalink from './Company/Panalink';


const Home = () => {
  return (
    <div>
      <Nav />
      <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/Ebn" element={<Main />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Panalink" element={<Panalink/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};
export default Home;
