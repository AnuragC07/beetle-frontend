import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FullBlog from "./pages/FullBlog";
import User from "./pages/User";
import Create from "./pages/Create";
import Landing from "./pages/Landing";
import Test from "./pages/Test";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fullblog/:id" element={<FullBlog />} />
        <Route path="/user" element={<User />} />
        <Route path="/create" element={<Create />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
