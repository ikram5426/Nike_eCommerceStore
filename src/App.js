import React from 'react'
import { Content, Hero, Sales, Stories } from './component'
import { heroapi, popularSales ,topRatedSales,highlight, sneaker, story} from "../src/data/data";

const App = () => {
  return (
    <main className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi}></Hero>
      <Sales endPoint={popularSales} ifExist></Sales>
      <Content endPoint={highlight} ifExist></Content>
      <Sales endPoint={topRatedSales}></Sales>
      <Content endPoint={sneaker}></Content>
      <Stories story={story}></Stories>
    </main>
  );
}

export default App