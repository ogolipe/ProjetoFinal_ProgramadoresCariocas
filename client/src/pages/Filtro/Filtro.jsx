import React from 'react'
import './style.scss'
import Loadind from '../../components/Loading/loading';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

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
                  Gratuito
              </button>
              <button className='btt-filtro'>
                <span class="spinner"></span>
                  Até 30
              </button>
              <button className='btt-filtro'>
                <span class="spinner"></span>
                  Até 100
              </button>
              <button className='btt-filtro'>
                <span class="spinner"></span>
                  O céu é o limite
              </button>
              </div>
          </div>
          
    </div>
    <Footer />
  </div>
  )
}

export default Filtro

