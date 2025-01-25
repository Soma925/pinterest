import React, { useState } from 'react';
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

// function upload_img(event,setPinImage){
//     if (event.target.files && event.target.files[0]){
//         if(/image\/*/.test(event.target.files[0].type)){
//             const reader=new FileReader();
//             reader.onload= function(){
//                 setPinImage(reader.result);
//             }
//             reader.readAsDataURL(event.target.files[0]);
//         }
//     }
// }



export default function Pin(props) {
    //const[pinImage, setPinImage]=useState();
  return (
    // <div>
    //     <input onChange={event => upload_img(event,setPinImage)} type="file" name="picture" id="picture" /> 
    //     <div className="card"> 
        <div className={`card card_${props.pinDetails.pin_size}`}>
            <div className="pin_title">{props.pinDetails.title}</div>
            <div className="pin_modal">
                <div className="modal_head">
                    <div className="save_card">Save</div>
                </div>
                <div className="modal_foot">
                    <div className="pint_mock_icon_container">
                        <FontAwesomeIcon className="print_mock_icon" icon={faArrowUpFromBracket} />
                    </div>
                    <div className="pint_mock_icon_container">
                        <FontAwesomeIcon className="print_mock_icon" icon={faEllipsis} />
                    </div>
                </div>
            </div>
            <div className="pin_image">
                <img src={props.pinDetails.img_blob} alt="pin_image"/>
            </div>
        </div>
    // </div>
  )
}
