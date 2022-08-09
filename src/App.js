import React from 'react'

import Headersection from './components/Headersection'
import Investments from './components/Investments'
import BattleGround from './components/BattleGround'
import Financeapp from './components/Financeapp'
import Insurance from './components/Insurance'
import Genierecommends from './components/Genierecommends'
import Footersection from './components/Footersection'
import Indices from './components/Indices'

export default function App() {
  return (
    <>
    {/* <Indices/> */}
    <Headersection/>
    <Investments />
    <BattleGround/>
    <Genierecommends />
    <Insurance />
    <Financeapp/>
    <Footersection/> 
    </>
  )
}
