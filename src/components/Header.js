import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
//import './Header.css';
import '../../src/App.css';

export default function Header() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid con">
                <a className="navbar-brand logo" href='/'> <FontAwesomeIcon className='logoicon' icon={faPinterest} />Pinterest</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                        <a className="nav-link" href="/">Explore</a>
                        </li>    
                    </ul>
                    <ul class="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Press</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link login" href="/">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link signup" href="/">Sign up</a>
                        </li>		
                    </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}
