import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%
`;


export default function PageDefault({children}) {
    return (
        <>
        <Main>
            <Menu />
            {children}
        </Main>
        <Footer />
        </>
    )
}
