
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegisterPage from "./pages/RegisterPage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/index" element={<IndexPage />} /> {}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
