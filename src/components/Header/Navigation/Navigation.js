import React from 'react';

import './_navigation.scss';

export default function Navigation() {
  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" id="link1" aria-current="page" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="link2" href="#">MARKETS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="link3" href="#">PRACTICE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="link4" href="#">PLAY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="link5" href="#">NEWS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="link6" href="#">TOOLS</a>
          </li>
        </ul>
      </div>

    </>
  )
}
