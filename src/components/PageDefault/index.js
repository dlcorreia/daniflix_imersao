import React from 'react';
import { BodyWrapper, Main } from './style.js';
import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault ({ children, paddingAll }) {
    return (
        <BodyWrapper>
            <Menu />
            <Main paddingAll={paddingAll}>
                {children}
            </Main>
            <Footer />
        </BodyWrapper>
    );
}

export default PageDefault;