import React from 'react';
import Header from '../Header';
import Input from '../Input';
import './Layout.scss';

const Layout = ({children}) => {
    return ( 
        <main className="layout">
            <Header />
            <Input />
            {children}
        </main>
     );
}
 
export default Layout;