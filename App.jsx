import React from "react";
import {  Routes, Route } from "react-router-dom";
import Second from "./pages/Second";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <div className="h-[80px] ">
         <Home/>
     </div>
 
     <Routes>
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
 
 
  );
}

export default App;
