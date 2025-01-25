// import React from 'react'
// import chiken1 from '../../src/images/chiken1.jpg';
// import chiken2 from '../../src/images/chiken2.jpg';
// import chiken3 from '../../src/images/chiken3.jpg';
// import chiken4 from '../../src/images/chiken4.jpg';
// export default function pin(props) {
//   return (
//     <div style={{
//       ...styles.pin,
//       ...styles[props.size]
//     }}>

//       {/* <img src={chiken1} alt=""/> */}
      
//     </div>
//   )
// }

// const styles={
//   pin:{margin:'15px 10px',padding:0,borderRadius:'16px',backgroundColor:'red',position:'relative',overflow:'hidden'},
//   small:{gridRowEnd:'span 26',overflow:'hidden',position:'relative'},
//   medium:{gridRowEnd:'span 33',overflow:'hidden',position:'relative'},
//   large:{gridRowEnd:'span 38',overflow:'hidden',position:'relative'},
// img:{position:'absolute',width:'100%',height:'100%',ovjectFit:'fill'}
// }

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
