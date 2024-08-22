import React from 'react';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget';
import ItemList from '../ItemListContainer';


const Navbar = () => {
return (
<header className="header">
        <nav className="navbar container">
            <figure className="navbar__logo"> 
                <img src={ logo } alt="Logo Virya Yoga & Wellness" />
            </figure>
            <menu className="navbar__menu">
                    <ItemList label="Home"/>
                    <ItemList label="Tienda"/>
                    <ItemList label="Contacto"/>
                    <li><a className='navbar__link' href=""><CartWidget quantity={0}/> </a></li>
            </menu>
        </nav>
</header>
);
}
export default Navbar;