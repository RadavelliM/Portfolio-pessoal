import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SPA from './pages/spa';
import NotFound from './pages/notFound404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SPA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
