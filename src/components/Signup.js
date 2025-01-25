import React from 'react'
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
 



export default function Signup() {
    const navigate=useNavigate();
    function handleClick(){
        navigate("/mainpage")
    }
  return (
    <div>
        <div className="container mt-3 ">
            <div className="signuplogo"><FontAwesomeIcon className='signlogoicon' icon={faPinterest} /></div>
            <h1 className='signupFormh1'>Welcome to Pinterest</h1>
            <div className='Signtext1'>Find new ideas to try</div>
            <div className="signmain">
                <form>
                    <div className="mb-3 mt-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control singinpt"  placeholder="Email" name="email" />
                    </div>
                    <div className="mb-3">
                    <label for="pwd">Password</label>
                    <input type="password" className="form-control singinpt"  placeholder="Create a password" name="pwd"/>
                    </div>
                    <div className="mb-3">
                    <label for="dob">Birthdate</label>
                    <input type="date" className="form-control singinpt"  name="dob"/>
                    </div>
                    <div className="d-grid gap-2">
                        {/* <button type="submit" className="btn singbtn" onClick={handleClick}>Continue</button> */}
                        <div className="btn singbtn" onClick={handleClick}>Continue</div>
                    </div>
                    
                </form>
                <div className='Signtext2'>OR</div>
                <div className="d-grid gap-2">
                    <a href="#!" className="btn bsb-btn-xl singWithGgl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        <span className="ms-2 fs-6 text-uppercase">Continue With Google</span>
                    </a>
                </div>

                <div className='Signtext3'>By continuing, you agree to Pinterest's Terms of service and acknowledge you've read our Privacy Policy. Notice at collection. <br />Already a member? <a href="/" className='boldLog' >Log in</a></div>
                
            </div>
        </div>

    </div>
  )
}
