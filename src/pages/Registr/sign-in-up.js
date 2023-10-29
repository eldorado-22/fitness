import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import uniqid from 'uniqid';
import "./style.scss";

const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // useState()
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState("Name не может быть пустым")
    const [nameDirty, setNameDirty] = useState(false)
    const [notVal, setNotVal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Password не может быть пустым')

    // ADD_ACCOUNT
    const addAccount = (obj) => {
        let acc = JSON.parse(localStorage.getItem('tranAcc')) || {}
        localStorage.setItem('tranAcc', JSON.stringify(obj))
        navigate('/')
    }
    // NEW ACCOUNT
    const newAcc = {
        id: uniqid(),
        name: name,
        gmail: email,
        password: password,
        inAcc: true
    }

    // EMAIL
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email")
        } else {
            setEmailError("")
        }
    }
    // PASSWORD
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 8) {
            setPasswordError("Пароль должен быть длиннее 5 и меньше 8")
            if (!e.target.value) {
                setPasswordError("Password не может быть пустым")
            }
        } else {
            setPasswordError('')
        }
    }
    // NAME
    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 20) {
            setNameError("Имя должен быть длиннее 4 и меньше 50")
            if (!e.target.value) {
                setNameError("Name не может быть пустым")
            }
        } else {
            setNameError("")
        }
    }

    // EMAIL && PASSWORD
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case "password" :
                setPasswordDirty(true)
                break
            case  "name" :
                setNameDirty(true)
        }
    }
    return (
        <>
            <section id='signUp'>
                <div className="container">
                    <div className="signUp">
                        <div className="signUp--form py-20">
                            <form className="signUp--form__search">
                                <h1>Registration</h1>

                                <div className="search">
                                    {(nameDirty && nameDirty) && <div style={{
                                        color: "red"
                                    }}>{nameError}</div>}
                                    <input style={{
                                        border: nameDirty && password === "" ? "1px solid red" : "",
                                        outline: nameDirty && password === "" ? "1px solid red" : "",
                                    }} onChange={e => nameHandler(e)}
                                           type="text" name="name" placeholder="Enter you name..."
                                           value={name}
                                           onBlur={e => blurHandler(e)}
                                    />
                                    <h4 className="emails">
                                        {(emailDirty && emailError) && <div style={{
                                            color: "red"
                                        }}>{emailError}</div>}
                                    </h4>
                                    <input style={{
                                        border: emailDirty && password === "" ? "1px solid red" : "",
                                        outline: emailDirty && password === "" ? "1px solid red" : "",
                                    }} onChange={e => emailHandler(e)}
                                           value={email}
                                           onBlur={e => blurHandler(e)}
                                           type="email" name="email"
                                           placeholder="Enter you email..."/>
                                    <h4 className="emails">
                                        {(passwordError && passwordDirty) && <div style={{
                                            color: "red"
                                        }}>{passwordError}</div>}
                                    </h4>
                                    <input style={{
                                        border: passwordDirty && email === "" ? "1px solid red" : "",
                                        outline: passwordDirty && email === "" ? "1px solid red" : ""
                                    }} onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}
                                           type="password" name="password"
                                           placeholder="Enter you password..."/>

                                        <button onClick={() => name !== '' && email !== '' && password !== '' ?
                                            addAccount(newAcc) : setNotVal(true)} onChange={e => emailHandler(e)}
                                                type="submit">
                                            Registration
                                        </button>

                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Form;


// import React, { Component } from 'react';
// import { FormErrors } from './form_Error';
// import './form.css';
//
// class Form extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             formErrors: {email: '', password: ''},
//             emailValid: false,
//             passwordValid: false,
//             formValid: false
//         }
//     }
//
//     handleUserInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({[name]: value},
//             () => { this.validateField(name, value) });
//     }
//
//     validateField(fieldName, value) {
//         let fieldValidationErrors = this.state.formErrors;
//         let emailValid = this.state.emailValid;
//         let passwordValid = this.state.passwordValid;
//
//         switch(fieldName) {
//             case 'email':
//                 emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//                 fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//                 break;
//             case 'password':
//                 passwordValid = value.length >= 6;
//                 fieldValidationErrors.password = passwordValid ? '': ' is too short';
//                 break;
//             default:
//                 break;
//         }
//         this.setState({formErrors: fieldValidationErrors,
//             emailValid: emailValid,
//             passwordValid: passwordValid
//         }, this.validateForm);
//     }
//
//     validateForm() {
//         this.setState({formValid: this.state.emailValid && this.state.passwordValid});
//     }
//
//     errorClass(error) {
//         return(error.length === 0 ? '' : 'has-error');
//     }
//
//     render () {
//         return (
//             <form className="demoForm">
//                 <h2>Sign up</h2>
//                 <div className="panel panel-default">
//                     <FormErrors formErrors={this.state.formErrors} />
//                 </div>
//                 <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
//                     <label htmlFor="email">Email address</label>
//                     <input type="email" required className="form-control" name="email"
//                            placeholder="Email"
//                            value={this.state.email}
//                            onChange={this.handleUserInput}  />
//                 </div>
//                 <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" name="password"
//                            placeholder="Password"
//                            value={this.state.password}
//                            onChange={this.handleUserInput}  />
//                 </div>
//                 <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
//             </form>
//         )
//     }
// }
//
// export default Form;