import React from 'react';
import Logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom';
import './Menu.css'
import ButtonLink from '../Menu/components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Logo da MusicFlix"></img>
            </Link>
 
            <ButtonLink className="ButtonLink">
                <Link to='/cadastro/video' >
                Novo Vídeo
                </Link>
            </ButtonLink>
        </nav>
    )
}

export default Menu;