import styled from 'styled-components';

export const BodyWrapper = styled.div`
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
    background: #141414;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    @media(max-width: 800px) {
        padding-top: 40px;
    }
`;

export const Main = styled.main`
    color: var(--white);
    flex: 1;
    padding: 0 5% 0 5%;
    @media(max-width: 800px) {
        padding: 0;
    }
`;