import React from "react";
import { Home } from "./Home";
import { Navi } from "./Navi";
import { Subscribers } from "./subscribers/Subscribers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./Category/Category";
import { Card, CardContent } from "@mui/material";
import { Genders } from "./Gender/Genders";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Card>
          <CardContent>
            <Navi />
          </CardContent>
        </Card>

        <Routes>
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/category" element={<Category />} />
          <Route path="/gender" element={<Genders />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
