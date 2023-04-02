import React from 'react'
import { Hero } from './component'
import {heroapi} from '../src/data/data'

const App = () => {
  return (
<Hero heroapi={heroapi}></Hero>
  )
}

export default App