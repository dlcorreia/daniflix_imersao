import React from 'react';
import Logo from '../../assets/images/Logo.png';
import { LogoImage, MenuWrapper, ButtonLink} from './style.js';

//import Button from '../Button';

function Menu () {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="logo Daniflix" />
            </a>

            <ButtonLink as="a" href="/" className="ButtonLink">
                Novo vídeo
            </ButtonLink>
        </MenuWrapper>

    );
}

export default Menu;