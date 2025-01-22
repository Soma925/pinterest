import React from 'react'
import '../../src/App.css';
import img1 from '../../src/images/tea.jpg';
import img2 from '../../src/images/singara.jpg';
import img3 from '../../src/images/sandwich.jpg';
import img4 from '../../src/images/idli.jpg';
import img5 from '../../src/images/dhosa.jpg';
import img6 from '../../src/images/coffee.jpg';
import img7 from '../../src/images/burgur.jpg';

import decimg1 from '../../src/images/decorate1.jpg';
import decimg2 from '../../src/images/decorate2.jpg';
import decimg3 from '../../src/images/decorate3.jpg';
import decimg4 from '../../src/images/decorate4.jpg';
import decimg5 from '../../src/images/decorate5.jpg';
import decimg6 from '../../src/images/decorate6.jpg';

import diyimg1 from '../../src/images/diy1.jpg';
import diyimg2 from '../../src/images/diy2.jpg';
import diyimg3 from '../../src/images/diy3.jpg';
import diyimg4 from '../../src/images/diy4.jpg';
import diyimg5 from '../../src/images/diy5.jpg';
import diyimg6 from '../../src/images/diy6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Body() {
  return (
    <div>
    {/* first part */}
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="li active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"className='li'></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"className='li'></button>
        </div>
        <h1 className='mainHed'>Get your next</h1>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="slider slider1">         
                    <div className="row">
                        <h1 className='subHed'>chai time snacks idea</h1>
                        <div className="col">
                            <img className='img1' src={img1} alt="" />
                        </div>
                        <div className="col">
                            <img className='img2' src={img2} alt="" />
                        </div>
                        <div className="col">
                            <img className='img3' src={img3} alt="" />
                        </div>
                        <div className="col">
                            <img className='img4' src={img4} alt="" />
                        </div>
                        <div className="col">
                            <img className='img3' src={img5} alt="" />
                        </div>
                        <div className="col">
                            <img className='img2' src={img6} alt="" />
                        </div>
                        <div className="col">
                            <img className='img1' src={img7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="slider slider2">
                    <div className="row">
                        <h1 className='subHed1'>home decor idea</h1>
                        <div className="col">
                            <img className='img1' src={decimg1} alt="" />
                        </div>
                        <div className="col">
                            <img className='img2' src={decimg2} alt="" />
                        </div>
                        <div className="col">
                            <img className='img3' src={decimg3} alt="" />
                        </div>
                        <div className="col">
                            <img className='img4' src={decimg4} alt="" />
                        </div>
                        <div className="col">
                            <img className='img3' src={decimg5} alt="" />
                        </div>
                        <div className="col">
                            <img className='img2' src={decimg6} alt="" />
                        </div>
                        <div className="col">
                            <img className='img1' src={decimg4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="slider slider3">
                    <div className="row">
                        <h1 className='subHed2'>DIY idea</h1>
                        <div className="col">
                            <img className='img1' src={diyimg1} alt="" />
                        </div>
                        <div className="col">
                            <img className='img2' src={diyimg2} alt="" />
                        </div>
                        <div className="col">
                            <img className='img3' src={diyimg3} alt="" />
                        </div>
                        <div className="col">
                            <img className='img4' src={diyimg4} alt="" />
                        </div>
                        <div className="col">
                            <img className='img3' src={diyimg5} alt="" />
                        </div>
                        <div className="col">
                            <img className='img2' src={diyimg6} alt="" />
                        </div>
                        <div className="col">
                            <img className='img1' src={diyimg4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='aftercar'>
        <div className="aftercartext">Here’s how it works <FontAwesomeIcon icon={faChevronDown} /></div>
    </div>
    {/* Second part */}
    <div className="searchBody">
        
    </div>
    </div>
  )
}
