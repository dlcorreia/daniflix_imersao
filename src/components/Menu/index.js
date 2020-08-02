import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Logo.png';
import { LogoImage, MenuWrapper, ButtonLink} from './style.js';

//import Button from '../Button';

function Menu () {
    return (
        <MenuWrapper>
            <Link to="/">
                <LogoImage src={Logo} alt="logo Daniflix" />
            </Link>

            <ButtonLink as={Link} to="/cadastro/video">
                Novo vídeo
            </ButtonLink>
        </MenuWrapper>

    );
}

export default Menu;