import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


export default function PageDefault({children}) {
    return (
        <div>
            <Menu />
            {children}
            <Footer />
        </div>
    )
}
