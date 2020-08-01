import styled from 'styled-components';
import Button from '../Button';

export const LogoImage = styled.img`
    max-width: 168px;
    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    align-items: center;    
    background: var(--black);
    border-bottom: 2px solid var(--primary);
    display: flex;
    height: 94px;
    justify-content: space-between;
    left: 0;
    position: fixed;
    padding-left: 5%;
    padding-right: 5%;
    top: 0;
    width: 100%;
    z-index: 100;

    @media (max-width: 800px) {
        height:40px;
        justify-content: center;
    }
`;

export const ButtonLink = styled(Button)`
    align-items: center;
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    display: flex;
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        border: 1px solid var(--primary);
        color: var(--primary);
        opacity: .5;
    }

    @media(max-width: 800px) {
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        color: var(--white);
        justify-content: center;
        left: 0;
        position: fixed;
        right: 0;

        &:hover,
        &:focus {
            opacity: 1;
            border: 0;
            color: var(--white);
        }
    }
`;