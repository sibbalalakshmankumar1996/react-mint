import React from 'react';

import './_header.scss';


import Hambourg from './Hambourger/Hambourg'
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Notification from './Notification/Notification';
import Search from './Search/Search';

import Signin from './Signin/Signin';


export default function Header() {
  

  return (
    <>
      <header>
        <section className="shadow-sm">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-7 col-lg-8">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <Hambourg />
                  <Logo />
                  <Navigation />
                </nav>
              </div>
              <ul className="col-12 col-md-5 col-lg-4 list-unstyled m-0 col-sm-3 d-flex align-items-center">
                <Search />
                <Notification />
                
                <Signin />
              </ul>
            </div>
          </div>
        </section>
        
      </header>

      

    </>
  )
}

