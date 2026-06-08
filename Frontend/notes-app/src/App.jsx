import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/edit-note" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
