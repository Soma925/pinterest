import React,{useState} from 'react';
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';


function upload_img(event,pinDetails,setpinDetails,setshowLabel,setshowModalPin){
    if (event.target.files && event.target.files[0]){
        if(/image\/*/.test(event.target.files[0].type)){
            const reader=new FileReader();
            reader.onload= function(){
                setpinDetails({
                    ...pinDetails,
                    img_blob:reader.result
                });
                setshowLabel(false);
                setshowModalPin(true);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }
}

function check_size(event) {
    const image=event.target;
    image.classList.add('pin_max_width');
    if(image.getBoundingClientRect().width<image.parentElement.getBoundingClientRect().width ||image.getBoundingClientRect().height<image.parentElement.getBoundingClientRect().height){
        image.classList.remove('pin_max_width');
        image.classList.add('pin_max_height');
    }

    image.style.opacity=1;
}

function save_pin(pinDetails,add_pin) {
    const users_data={
        ...pinDetails,
        author:'jack',
        board:'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        destination: document.querySelector('#pin_destination').value,
        pin_size: document.querySelector('#pin_size').value,
    }
    add_pin(users_data);
}

export default function Uploadmodal(props) {
    const[pinDetails, setpinDetails]=useState({
        author:'',
        board:'',
        title:'',
        description:'',
        destination:'',
        img_blob:'',
        pin_size:'',
        
    });
    const[showLable, setshowLabel]=useState(true);
    const[showModalPin, setshowModalPin]=useState(false);
  return (
    <div className="add_pin_modal">
        <div className="add_pin_container">
            <div className="side" id="left_side">
                <div className="section1"></div>
                <div className="section2">
                    <label htmlFor="upload_img" id="upload_img_label" style={{display:showLable?'block':'none'}}>
                        <div className="upload_img_container">
                            <div className="pint_mock_icon_container">
                                <FontAwesomeIcon className="print_mock_icon" icon={faArrowUpFromBracket} />
                            </div>
                            <div>Choose a file or drag and drop it here</div>
                            <div>We recommend using high quality .jpg files less than 20MB or .mp4 files lessthan 200MB </div>
                        </div>
                        <input onChange={event => upload_img(event,pinDetails,setpinDetails,setshowLabel,setshowModalPin)} type="file" name="upload_img" id="upload_img" value=""/>
                    </label>
                    <div className="modal_pin" style={{display:showModalPin?'block':'none'}}>
                        <div className="pin_image_modal">
                            <img onLoad={check_size} src={pinDetails.img_blob} alt="pin_image_modal"/>
                        </div>
                    </div>
                    
                </div>
                <div className="section3">
                    <div className="svae_from_site">Save from site</div>
                </div>
            </div>
            <div className="side" id="right_side">
                <div className="section1">
                    <div className="select_size">
                        <select defaultValue="Select" name="pin_size" id="pin_size">
                            <option value="">Select</option>
                            <option value="small">small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        <div onClick={()=>save_pin(pinDetails,props.add_pin)} className="save_pin">Save</div>
                    </div>
                </div>
                <div className="section2">
                    <input type="text" className="new_pin_image" id="pin_title" placeholder="Add a title"/>
                    <input type="text" className="new_pin_image" id="pin_description" placeholder="Add a detailed description"/>
                    <input type="text" className="new_pin_image" id="pin_destination" placeholder="add a link"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}
