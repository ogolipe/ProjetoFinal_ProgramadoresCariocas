import React from 'react';
import '../Section/Section.css'
import riotest from '../Section/riotest1.gif'

const Section = () => {
    return( 
        
        <div className="body"> 
        <div className="row">
    <div className="imgWrapper">
        <img src={riotest}  alt="foto rio"/>
    </div>
    <div className="contentWrapper">
        <div className="contentS">
            <span className="textWrapper">
                <span></span> <h4>Rolés para todos os bolsos.</h4>
            </span>
            <h2>NOSSA PROPOSTA</h2>
            <p>Nosso site de eventos tem como objetivo fornecer aos usuários uma plataforma fácil e intuitiva para encontrar eventos locais e se conectarem com organizadores de eventos.
             Com nosso site, os usuários podem pesquisar uma variedade de eventos em sua área, incluindo shows, festivais, conferências, exposições e muito mais.</p>

            <p>Um dos recursos-chave do nosso site é a capacidade de filtrar eventos por valor mínimo para gastar.
            Isso permite que os usuários encontrem eventos que se encaixem em seus orçamentos e ajuda a garantir que não gastem mais do que o necessário em eventos.</p>
            
            <p>Além disso, o nosso site permite que os organizadores de eventos cadastrem seus eventos e alcancem um público mais amplo. Com nosso sistema de cadastro de eventos, 
            os organizadores podem criar listas detalhadas de seus eventos, incluindo informações como local, data, hora, preço, descrição e muito mais.</p>

            
        </div>
    </div>

    
    </div>
</div>


       
    )
};

export default Section;