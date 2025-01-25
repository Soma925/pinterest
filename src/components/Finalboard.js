import React from 'react'
import '../../src/App.css';
import Pin from './Pin.js';
import Uploadmodal from './Uploadmodal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
                <div className='navigation_bar'>
                    <div onClick={()=>this.setState({show_modal:true})} className="pint_mock_icon_container add_pin">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
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