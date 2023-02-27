import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Eventos from './pages/Eventos/Eventos'
import Add from './pages/Add/Add'
import Update from './pages/Update/Update';
import Filtro from './pages/Filtro/Filtro';

function App() {
  return (
    
    <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Eventos" element={<Eventos/>} />
        <Route path="/Add" element={<Add/>} />
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/filtro" element={<Filtro/>}/>
    </Routes>
</Router>
   
  );
}

export default App;
