import React from 'react'
import { Hero, Sales } from './component'
import { heroapi, popularSales ,topRatedSales} from "../src/data/data";

const App = () => {
  return (
    <div className='flex flex-col gap-16 relative'>
      <Hero heroapi={heroapi}></Hero>
      <Sales endPoint={popularSales} ifExist></Sales>
      <Sales endPoint={topRatedSales}></Sales>
    </div>
  );
}

export default App