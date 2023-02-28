import React from "react";
import '../Footer/Footer.css'
import linkedin from '../Footer/linkedin.svg'
import github from '../Footer/github-mark-white.svg'


function Footer(){
  return ( 
  
  <div className="footer">
      <div className="sb__footer section__padding">
  
        <div className="sb__footer-links">
          
          <div className="sb__footer-links_div">
          <h4>Projeto Final</h4>
          <a href="/">
          <p>Programadores Cariocas</p>
          </a>
          <a href="/">
          <p>Senac</p>
          </a>
          <a href="/">
          <p>Resília</p>
          </a>
         </div>

          <div className="sb__footer-links_div">
                <h4> Github</h4>
                <div className="socialmedia">
                  <p className="p-footer"> Manu Oliveira <a href="https://github.com/ogolipe" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a></p>
                  <p className="p-footer"> Lucas Salustriano<a href="https://github.com/lcsalustriano" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a></p>
                  <p className="p-footer"> Felipe Costa<a href="https://github.com/CrvgFelipe" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a></p>
                  <p className="p-footer"> Luiz Souza<a href="https://github.com/LuizMatt97" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a></p>
                  <p className="p-footer"> Guilherme Brito<a href="https://github.com/GuilhermeBrito89" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a></p>
                </div>
            </div>

          <div className="sb__footer-links_div">
                <h4> Linkedin</h4>
                <div className="socialmedia">
                  <p className="p-footer"> Manu Oliveira <a href="https://www.linkedin.com/in/manuop/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></p>
                  <p className="p-footer"> Lucas Salustriano<a href="https://www.linkedin.com/in/lucassalustriano/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></p>
                  <p className="p-footer"> Felipe Costa<a href="https://www.linkedin.com/in/felipe-costa-02672318b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></p>
                  <p className="p-footer"> Luiz Souza<a href="https://www.linkedin.com/in/luiz-felipe-d-782111225/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></p>
                  <p className="p-footer"> Guilherme Brito<a href="https://www.linkedin.com/in/guilherme-brito-14a95322b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></p>
                </div>
          </div>

          </div>
      </div>
  </div>
)
}

export default Footer;