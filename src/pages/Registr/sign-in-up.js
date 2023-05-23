import React, {useState} from 'react';
import {FaGithub, FaLock, FaUserAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FcGoogle} from "react-icons/fc";
import {ImFacebook} from "react-icons/im";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import uniqid from 'uniqid';
import "./style.scss";

const SignUp = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')

    const [notVal, setNotVal] = useState(false)

    const newAcc = {
        id: uniqid(),
        name: name,
        gmail: gmail,
        password: password,
        inAcc: true
    }

    const dispatch = useDispatch()
    const addAccount = (obj) => {
        dispatch({type: 'ADD_ACCOUNT', payload: obj})
        navigate('/succReg')
    }

    return (
        <section id='signUp'>
            <div className="container">
                <div className="signUp">
                    <div className="signUp--form py-20">
                        <h2 className=" text-white">User Name</h2>
                        <div style={{border: notVal && name === '' ? '2px solid red' : ''}}
                             className="signUp--form__block">
                            <FaUserAlt className="signUp--form__block--icon"/>
                            <input onChange={(e) => setName(e.target.value)}
                                   type="email" placeholder='Enter Your Full Name'
                                   style={{}}
                            />
                        </div>

                        <h2 className="text-white">Email or Phone Number</h2>
                        <div style={{border: notVal && gmail === '' ? '2px solid red' : ''}}
                             className="signUp--form__block">
                            <MdEmail className="signUp--form__block--icon"/>
                            <input onChange={(e) => setGmail(e.target.value)} type="email"
                                   placeholder='Your Email Or Phone Number'/>
                        </div>

                        <h2 className="text-white">Password </h2>
                        <div style={{border: notVal && password === '' ? '2px solid red' : ''}}
                             className="signUp--form__block">
                            <FaLock className="signUp--form__block--icon"/>
                            <input onChange={(e) => setPassword(e.target.value)}
                                   type="password" placeholder='Creat Password'/>
                        </div>
                        <div className='signUp--links'>
                            <FcGoogle/>
                            <ImFacebook className='signUp--links__face'/>
                            <FaGithub className='signUp--links__github'/>
                        </div>
                        <Link to={"/"}>
                            <button onClick={() => name !== '' && gmail !== '' && password !== '' ?
                                addAccount(newAcc) : setNotVal(true)}> Continue
                            </button>
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default SignUp;