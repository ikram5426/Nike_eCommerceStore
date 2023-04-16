import React from 'react'
import { Cart, Content, Footer, Hero, Navbar, Sales, Stories } from './component'
import { heroapi, popularSales ,topRatedSales,highlight, sneaker, story,footerAPI} from "../src/data/data";

const App = () => {
  return (
    <React.Fragment>
      <Cart/>
      <Navbar/>
    <main className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi}></Hero>
      <Sales endPoint={popularSales} ifExist></Sales>
      <Content endPoint={highlight} ifExist></Content>
      <Sales endPoint={topRatedSales}></Sales>
      <Content endPoint={sneaker}></Content>
      <Stories story={story}></Stories>
    </main>
    <Footer footerAPI={footerAPI}></Footer>
    </React.Fragment>

  );
}

export default App