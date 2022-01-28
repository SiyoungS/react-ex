import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home  from "../Skills/Home/Home";
import Signin  from "../Skills/Signin/Signin";
import Nav  from '../Nav/Nav' 

function App() {
  return (
    <BrowserRouter>
        <Nav />
        {/* <Profile name='시영' job='백수'/>
        <Counter />
        <TodoList />
         */}
        <Routes>
          {/* <Route path="/Nav" element={<Nav />} /> */}
          <Route path="/" element={<Signin />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;