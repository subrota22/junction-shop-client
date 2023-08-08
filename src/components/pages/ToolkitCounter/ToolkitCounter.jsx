import React from 'react';
import Coin from '../../../features/coin/Coin';
import Counter from '../../../features/counter/Counter';
import { Helmet } from 'react-helmet';

const ToolkitCounter = () => {
    return (
        <>
        <Helmet><title> Toolkit counter  </title></Helmet>
       <div className="my-5">
        <br />  <br />  <br />  <br />  <br />
         <Coin></Coin>
           <Counter></Counter>
       </div>
       <br />  <br />  <br />
        </>
    );
};

export default ToolkitCounter;