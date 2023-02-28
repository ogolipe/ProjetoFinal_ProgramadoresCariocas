import React from 'react'
import './style.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';

const Filtro = () => {

  return (
  <div className='main'> 
  <Header />
  <div className='gap'></div>
    <div className='container'>
          
          <div className="roles-filtro">
            <div className='container-titulo-filtro'>
              <h2 className='titulo-filtro'> Escolha o que cabe no seu bolso! </h2>
            </div>
            
            <div className='botoes-filtro'>
              <button className='btt-filtro'>
                <span class="spinner"></span>
                  <Link to='/filtro/gratuito'>Gratuito</Link>
              </button>
              <button className='btt-filtro'>
                <span class="spinner"></span>
                <Link to='/filtro/30'>Até 30</Link>
              </button>
              <button className='btt-filtro'>
                <span class="spinner"></span>
                <Link to='/filtro/100'>Até 100</Link>
              </button>
              <button className='btt-filtro'>
                <span class="spinner"></span>
                <Link to='/filtro/ceu'>O céu é o limite!</Link>
              </button>
              </div>
          </div>
          
    </div>
    <Footer />
  </div>
  )
}

export default Filtro

