import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
