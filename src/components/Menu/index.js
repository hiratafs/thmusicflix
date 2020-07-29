import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import ButtonLink from '../Menu/components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img src={Logo} className="Logo" alt="Logo da MusicFlix"></img>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;