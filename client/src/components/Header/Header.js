import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../Header/Header.css'

function Header() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const handleClick = () =>setClick(!click);
const closeMobileMenu = () => setClick(false);

const viewButton = () => {
    if (window.innerWidth <= 960){
        setButton(false);
    }else {
        setButton(true);
    }
};

useEffect(() => {
    viewButton();
}, []);

window.addEventListener('resize', viewButton);

return(
        <>
        <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> 
                <span className='logoName'>RiOLé <i class="fas fa-route"></i></span>
                </Link>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Eventos' className='nav-links' onClick={closeMobileMenu}>ROLÉS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/filtro' className='nav-links' onClick={closeMobileMenu}>FILTRO</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Add' className='nav-links-adc' onClick={closeMobileMenu}>ADICIONE SEU ROLÉ</Link>

                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
    
}

export default Header;