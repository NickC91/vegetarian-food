import React from "react";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
