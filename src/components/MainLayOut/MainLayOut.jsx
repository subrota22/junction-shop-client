import React from 'react';
import Header from '../../shares/Header/Header';
import Footer from '../../shares/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <>
            <Header></Header>
             <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayOut;