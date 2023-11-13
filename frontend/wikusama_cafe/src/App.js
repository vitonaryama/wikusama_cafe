import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./pages/menu"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}