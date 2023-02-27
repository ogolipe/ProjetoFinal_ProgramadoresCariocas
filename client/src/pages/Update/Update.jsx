import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Update/style.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Update = () => {
  const [input, setInput] = useState({
    nome:"",
    descricao:"",
    valor_min:null,
    banner:"",
  })

  const navigate = useNavigate ()
  const location = useLocation()

  const eventoId = location.pathname.split("/")[2]

  console.log(location.pathname.split("/")[2]);/*no console do navegador aparece o location, 
  e dentro do location tem um tal de pathname*/

  const handleChange = (e) =>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e => {
  e.preventDefault()
  try {
    await axios.put("http://localhost:3000/eventos/" + eventoId, input)
    navigate("/Eventos") 
  } catch (err) {
    console.log(err);
  }
}

console.log(input);

  return (
    <div>
      <Header></Header>
    <div className='form'>
    <div className='formContainer'>
      <h1>Atualize seu Evento</h1>
      <input type="text" placeholder='título' onChange={handleChange} name='nome' />
      <input type="text" placeholder='descrição' onChange={handleChange} name='descricao' />
      <input type="number" placeholder='valor' onChange={handleChange} name='valor_min' />
      <input type="text" placeholder='imagem ilustrativa' onChange={handleChange} name='banner'/>
      <button className='formButton' onClick={handleClick}>Atualizar</button>
      </div>
       </div>
      <Footer></Footer>
    </div>
  )//botao quando for clicado enviara os campos para o servidor do backend
}

export default Update