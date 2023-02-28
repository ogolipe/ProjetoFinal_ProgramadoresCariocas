import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Eventos from './pages/Eventos/Eventos'
import Add from './pages/Add/Add'
import Update from './pages/Update/Update';
import Filtro from './pages/Filtro/Filtro';
import RolesG from './pages/EventosGratuitos/EventosGratuitos';
import Roles30 from './pages/Eventos30/Eventos30';
import Roles100 from './pages/Eventos100/Eventos100';
import RolesCeu from './pages/EventosCeu/EventosCeu';


function App() {
  return (
    
    <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Eventos" element={<Eventos/>} />
        <Route path="/Add" element={<Add/>} />
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/filtro" element={<Filtro/>}/>
        <Route path="/filtro/gratuito" element={<RolesG/>}/>
        <Route path="/filtro/30" element={<Roles30/>}/>
        <Route path="/filtro/100" element={<Roles100/>}/>
        <Route path="/filtro/ceu" element={<RolesCeu/>}/>
    </Routes>
</Router>
   
  );
}

export default App;
