import React from "react";
import { Home } from "./Home";
import { Navi } from "./Navi";
import {BrowserRouter,Routes,Route} from "react-router-dom"

export const Landing = () => {
  return (
   
    <React.Fragment>
      <BrowserRouter>
      <Navi/>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
