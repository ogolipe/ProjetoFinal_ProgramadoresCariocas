import React from "react";
import '../Footer/Footer.css'
import linkedin from '../Footer/linkedin.svg'


function Footer(){
  return ( 
  
  <div className="footer">
      <div className="sb__footer section__padding">
  
        <div className="sb__footer-links">
          
          <div className="sb__footer-links_div">
          <h4> Serviços</h4>
          <a href="/heltplan">
          <p> heltplan</p>
          </a>
          <a href="/individual">
          <p> individual 1</p>
          </a>
         </div>

          <div className="sb__footer-links_div">
        <h4>Testando 2</h4>
        <a href="/testando 2">
          <p> Employer 2</p>
          </a>
          <a href="/testano 2">
          <p> Employer 2</p>
          </a>
          <a href="/testando 2">
          <p> Employer 2</p>
          </a>
          </div>

          <div className="sb__footer-links_div">
            <h4>Testando 3</h4>
            <a href="/testando 3">
          <p> Employer 3</p>
          </a>
          <a href="/testando 3">
          <p> Employer 3</p>
          </a>
          <a href="/testando 3">
          <p> Employer 3</p>
          </a>
            </div>

            <div className="sb__footer-links_div">
                <h4> Integrantes</h4>
                <div className="socialmedia">
                 <p>  <img  src={linkedin} alt="" /></p>
                 <p> <img src={linkedin} alt=""/></p>
                 <p> <img src={linkedin} alt=""/></p>
                 <p> <img src={linkedin} alt=""/></p>
                 <p> <img src={linkedin} alt=""/></p> 
                </div>
            </div>

          </div>
      </div>
  </div>
)
}

export default Footer;