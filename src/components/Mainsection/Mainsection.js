import React from 'react'


import Marketindices from './marketindices/Marketindices';
import Portfolio from './portfolio/Portfolio';
import Investments from './investments/Investments';
import Battleground from './Battleground/Battleground';
import Genierecomends from './Genierecommends/Genierecomends';
import Insurance from './Insurance/Insurance';
import Finance from './Finance/Finance';
export default function Mainsection() {
  return (
    <>
    <main>
        <Marketindices />
        <Portfolio />
        <Investments />
        <Battleground />
        <Genierecomends />
        <Insurance />
        <Finance />
    </main>
    </>
  )
}
