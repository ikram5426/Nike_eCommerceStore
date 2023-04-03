import React from 'react'
import { Hero, Sales } from './component'
import { heroapi, popularSales ,topRatedSales} from "../src/data/data";

const App = () => {
  return (
    <>
      <Hero heroapi={heroapi}></Hero>
      <Sales endPoint={popularSales}></Sales>
      <Sales endPoint={topRatedSales}></Sales>
    </>
  );
}

export default App