import React from 'react';
import { BodyWrapper, Main } from './style.js';
import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault ({ children }) {
    return (
        <BodyWrapper>
            <Menu />
            <Main>
                {children}
            </Main>
            <Footer />
        </BodyWrapper>
    );
}

export default PageDefault;