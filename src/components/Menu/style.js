import style from 'styled-components';
import Button from '../Button';

export const LogoImage = style.img`
    max-width: 168px;
    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = style.nav`
    width: 100%;
    height: 94px;    
    
    // position: fixed;
    top: 0;
    left: 0;
    padding-left: 5%;
    padding-right: 5%;
    
    display: flex;
    justify-content: space-between;
    align-items: center

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);
`;

export const ButtonLink = style(Button)`
    color: var(--white);
    border: 1px solid var(--white);
    padding: 16px 24px;

    font-size: 16px;
    font-wight: bold;
    border-radius: 4px;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;