import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome/Welcome";
import Survey from "./Pages/Survey/Survey";
import Thanks from "./Pages/Thanks"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Welcome/> } /> 
    <Route path="/survey" element={<Survey/> } /> 
    <Route path="/thanks" element={<Thanks/> } /> 
    </Routes> 
   </BrowserRouter>
   </>
    
   
  );
}

export default App;
