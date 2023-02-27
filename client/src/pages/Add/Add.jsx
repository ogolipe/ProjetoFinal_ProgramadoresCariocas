import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Add/style.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



function Add(){
  
  const [input, setInput] = useState({
    nome:"",
    banner:"",
    valor_min:"",
    descricao:"",
    nome_categoria:""
  })

  console.log(input);

  const navigate = useNavigate ()

  const handleChange = (e) =>{
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e => {
  e.preventDefault()//esse codigo impede da pagina dar refresh depois q o botao for clicado
  try {
    await axios.post("http://localhost:3000/eventos", input) /*o input quer dizer q estou enviando meu json object
    (nome input da array da const Add)*/navigate("/Eventos") //se tudo der certo sera redirecionado para pagina raiz
  } catch (err) {
    console.log(err);//se der errado retornara o erro
  }
}

console.log(input);

  return (
    
    <div className="headerAdd"> <Header />
    
    <div className='form'>
    <div className='formContainer'>
      <h1>RiOLé</h1>
      <input type="text" placeholder='Título' onChange={handleChange} name='nome' />
      <input type="text" placeholder='Descrição' onChange={handleChange} name='descricao' />
      <input type="number" placeholder='Valor' onChange={handleChange} name='valor_min' />
      <input type="text" placeholder='Imagem ilustrativa' onChange={handleChange} name='banner'/>


      <h1>Selecione a Categoria</h1>
      <select className='custom-select-add' name='nome_categoria' onChange={handleChange}>
          <option value='todos' selected>
            CATEGORIAS
          </option>
          <option value='musica'>MÚSICA</option>
          <option value='comida'>COMIDA</option>
          <option value='turismo'>TURISMO</option>
          <option value='geek'>GEEK</option>
        </select>

      <button className='formButton' onClick={handleClick}>Adicionar</button>
      </div>
      </div>
      <Footer />
      </div>
  )//botao quando for clicado enviara os campos para o servidor do backend
}

export default Add