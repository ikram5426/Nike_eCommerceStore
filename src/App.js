import React from 'react'
import { Content, Hero, Sales } from './component'
import { heroapi, popularSales ,topRatedSales,highlight, sneaker} from "../src/data/data";

const App = () => {
  return (
    <div className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi}></Hero>
      <Sales endPoint={popularSales} ifExist></Sales>
      <Content endPoint={highlight} ifExist></Content>
      <Sales endPoint={topRatedSales}></Sales>
      <Content endPoint={sneaker}></Content>
    </div>
  );
}

export default App