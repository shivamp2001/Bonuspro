// import React, { useState } from "react";
// import "../src/App.css";
// import { useFormik } from "formik";
import Form from "./Components/Form";
import Forms from "./Components/Forms";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Actionbtn from "./Components/Actionbtn";

function App() {
  return (
    <React.Fragment>
      <main>
      <Routes>
        <Route path="/" element={<Form />}  />
        <Route path="/user" element={<Forms />}  />
        <Route path="/buttons" element={<Actionbtn />}  />
      </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
