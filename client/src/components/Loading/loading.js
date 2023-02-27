import circles from './Img/three-dots.svg'
import './Loading.css'

function Loadind() {
    return (
        <div className="loader_container">
            <h1>Carregando seu próximo rolé</h1>
            <img className="loader" src={circles} alt="Loading"/>
        </div>
    )
}

export default Loadind