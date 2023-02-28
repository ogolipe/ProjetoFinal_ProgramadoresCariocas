import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"//Link é sintaxe do react-router-dom
import axios from "axios"
import './style.css'
import Loadind from '../../components/Loading/loading';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Roles = () => {
  const [eventos, setEventos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos');
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {

    const fetchEventos = async () => {
      try {
        const res = await axios.get('http://localhost:3000/eventos');
        
        setEventos(res.data);
        setRemoveLoading(true)
      } catch (err) {
        console.log(err);
      }
    };
    fetchEventos();
  }, 3000)
  }, []);

  const handleCategoriaSelecionada = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const eventosFiltrados = eventos.filter((evento) => {
    if (categoriaSelecionada === 'todos') {
      return true;
    } else {
      return evento.nome_categoria === categoriaSelecionada;
    }
  });

  const handleDelete = async (id)=>{
    try {
      await axios.delete("http://localhost:3000/eventos/"+id)
      window.location.reload()//dar refresh na pagina
    } catch (err) {
      console.log(err);
    }
  }

  return (
  <div className='main'> 
  <Header />
  <div className='gap'></div>
  <div className='container'>
    
    <div className='div-select' >
    <h2 className='frase-carregamento'>Escolha o tipo de rolé que você quer:</h2>
        <select className='custom-select-add' name='select' onChange={(e) => handleCategoriaSelecionada(e.target.value)}>
          <option value='todos' selected>
            CATEGORIAS
          </option>
          <option value='musica'>MÚSICA</option>
          <option value='comida'>COMIDA</option>
          <option value='turismo'>TURISMO</option>
          <option value='geek'>GEEK</option>
        </select>
    
    </div>
    {!removeLoading && <Loadind/>}
        
        <div className="roles">
        {eventosFiltrados.map((evento) => (
          <div className='role' key={evento.id}>
            <span className='categoria'>
              <p>{evento.nome_categoria}</p>
            </span>
            {evento.banner && <img src={evento.banner} alt='' />}

            <div className='title-and-price'>
              <span className='title'>
                <h3>{evento.nome}</h3>
              </span>
              <span className='price'>
                <h1>R${evento.valor_min} </h1>
              </span>
            </div>

            <div className='div-desc'>
              <p>{evento.descricao}</p>
            </div>
          
              <div className='delete-and-update'>
                <button className='delete' onClick={() => handleDelete(evento.id)}>Excluir</button>
                <button className='update'><Link to={`/update/${evento.id}`}>Editar</Link></button>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}/*explicação roles.map ( para cada livro dentro da array book ira retornar uma div*/

/*entao sempre que rodarmos o componente Roles, ele vai rodar o codigo useEffect onde dentro dele tem uma função 
programada para juntar todos os rolés*/

export default Roles

/*para juntar os dados do banco de dados no meu server preciso instalar o axios,
ele ajuda a fazer requests atraves de um react app*/

///////////////////////////////////////////////////////////////////////////


/*Este código é um exemplo de um componente React chamado Books. Ele usa a biblioteca Axios para 
fazer uma solicitação para um servidor em http://localhost:3000/books para buscar uma lista de livros 
e armazená-los no estado local.

A primeira linha do código import React from 'react' importa a biblioteca React, que é usada para 
construir interfaces de usuário.

As próximas duas linhas importam os hooks useEffect e useState da biblioteca React. useState é um 
hook que permite que o componente armazene e gerencie o estado local. useEffect é um hook que permite 
que o componente execute efeitos colaterais, como fazer solicitações de API.

Em seguida, o código define um componente de função chamado Books. O componente define um estado local 
chamado books usando o hook useState. A função setBooks é usada para atualizar o estado local.

Dentro do hook useEffect, o componente define uma função assíncrona fetchAllBooks que usa o Axios 
para fazer uma solicitação GET para http://localhost:3000/books. Se a solicitação for bem-sucedida, 
 resposta é impressa no console. Se houver um erro, o erro é impresso no console.

O hook useEffect é usado para chamar a função fetchAllBooks sempre que o componente Books é montado 
ou atualizado. O segundo argumento do hook é um array vazio, o que significa que ele só será chamado 
uma vez quando o componente for montado.

Finalmente, o componente retorna um elemento <div> com o texto "Books". O componente é exportado como Books.

O Axios é usado para fazer solicitações de API a um servidor e é instalado usando o npm ou yarn. 
Ele simplifica o processo de fazer solicitações de API e permite que o componente trabalhe com os dados 
retornados da API.*/