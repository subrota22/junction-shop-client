import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../About/About';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Slider from '../../../shares/Slider/Slider';


const Home = () => {
    return (
        <>
            <Helmet><title> Home </title></Helmet>
            <br /><br /><br />
            <Slider></Slider>
            <About></About>
            <Clients></Clients>
            <Services></Services>
            <Portfolio></Portfolio>

        </>
    );
};

export default Home;