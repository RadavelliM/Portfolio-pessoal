import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SPA from './pages/spa';
import NotFound from './pages/notFound404';

const imgs = document.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'))

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
