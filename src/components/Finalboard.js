import React from 'react'
import '../../src/App.css';
import Pin from './Pin.js';
import Uploadmodal from './Uploadmodal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

class Finalboards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pins: [],
            show_modal:false,
        }
    }
    add_pin=pinDetails=>{
        this.setState(_state=>{
            const new_pins=[
                ..._state.pins
            ]
            new_pins.push(
                <Pin pinDetails={pinDetails} key={_state.pins.length}/>
            )
            return{
                pins:new_pins,
                show_modal:false
            }
        })
    }
    render(){       
        return (
            <div>
            {/* navigation bar */}
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid con">
                        <a className="navbar-brand logo" href='/'> <FontAwesomeIcon className='logoicon' icon={faPinterest} />Pinterest</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Explore</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" href="/">create</a>
                                </li>     
                            </ul>
                            <ul class="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><FontAwesomeIcon icon={faBell} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><FontAwesomeIcon icon={faMessage} /></a>
                                </li>
                                <li className="nav-item">
                                <div onClick={()=>this.setState({show_modal:true})} className="pint_mock_icon_container add_pin">
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                </li>
                                	
                            </ul>
                        </div>
                    </div>
                </nav>

               
                <div className="pin_container">
                    {this.state.pins}
                </div>
                <div className="add_pin_modal_container" onClick={event=> event.target.className === 'add_pin_modal'? this.setState({show_modal:false}):null}>
                    {
                        this.state.show_modal?
                            <Uploadmodal add_pin={this.add_pin}/>:null
                    }
                    
                </div>
            </div>
        )
    }
}
export default Finalboards;
