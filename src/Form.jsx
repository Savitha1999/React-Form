import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'; // Ensure you have the required styles in Form.css

export default function Forms() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [select, setSelect] = useState("");
    const [checkbox, setCheckbox] = useState([]);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [selectError, setSelectError] = useState("");
    const [checkboxError, setCheckboxError] = useState("");

    const [named, setNamed] = useState(false);
    const [emaild, setemaild] = useState(true);
    const [passd, setpassd] =useState(true);
    const [confirmd, setconfirmd] = useState(true);
    const [phoned, setphoned] =useState(true);
    const [radiod, setRadiod] = useState(true);



    const checkName = (value) => {
        if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            setNameError("Name should start with a capital letter and should not contain numbers");
        } else {
            setNameError("");
            setemaild(false)
        }
    }

    const checkEmail = (value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setEmailError("Email is invalid");
        } else {
            setEmailError("");
            setpassd(false);
        }
    }

    const checkPassword = (value) => {
        if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
            setconfirmd(false);
        }
    }

    const checkConfirmPassword = (value) => {
        if (value !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
            setphoned(false);
        }
    }

    const checkPhone = (value) => {
        if (!/^\d{10}$/.test(value)) {
            setPhoneError("Phone number should be 10 digits");
        } else {
            setPhoneError("");
            setRadiod(false);
        }
    }

    const handleCheckbox = (value) => {
        if (checkbox.includes(value)) {
            setCheckbox(checkbox.filter(item => item !== value));
        } else {
            setCheckbox([...checkbox, value]);
        }
        setCheckboxError("");
      
        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Ensure all fields are filled
        if (!name || !email || !password || !confirmpassword || !phone || !gender || !select || checkbox.length === 0) {
            setNameError(name ? "" : "Name is required");
            setEmailError(email ? "" : "Email is required");
            setPasswordError(password ? "" : "Password is required");
            setConfirmPasswordError(confirmpassword ? "" : "Confirm Password is required");
            setPhoneError(phone ? "" : "Phone number is required");
            setGenderError(gender ? "" : "Gender is required");
            setSelectError(select ? "" : "State is required");
            setCheckboxError(checkbox.length > 0 ? "" : "At least one language is required");
            toast.error("Please fill out all required fields.");
            return;
        }
    
        toast.success("Form submitted successfully!");
    }
    

    return (
        <div className="container">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="bg-primary text-white text-center mt-2 p-4">
                        <h1>FORM VALIDATION</h1>
                    </div>

                    <div className="forms bg-light p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label>NAME:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    disabled={named}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        checkName(e.target.value);
                                    }}
                     className={nameError ? "incorrect-input" : "correct-input"} />
                                            <p className="text-danger">{nameError}</p>
                                            </div>

                            <div className="form-group mb-3">
                                <label>EMAIL:</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email Id"
                                    value={email}
                                    disabled={emaild}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        checkEmail(e.target.value);
                                    }}
                                    className={emailError ? "incorrect-input" : "correct-input"} />
                <p className="text-danger">{emailError}</p>
                </div>

                            <div className="form-group mb-3">
                                <label>PASSWORD:</label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    value={password}
                                    disabled={passd}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        checkPassword(e.target.value);
                                    }}
                                    className={passwordError ? "incorrect-input" : "correct-input"} />
                                    <p className="text-danger">{passwordError}</p>
                            </div>

                            <div className="form-group mb-3">
                                <label>CONFIRM PASSWORD:</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Your Password"
                                    value={confirmpassword}
                                    disabled={confirmd}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        checkConfirmPassword(e.target.value);
                                    }}
                                    className={confirmpasswordError ? "incorrect-input" : "correct-input"} />
                                    <p className="text-danger">{confirmpasswordError}</p>                            
                            </div>

                            <div className="form-group mb-3">
                                <label>PHONE:</label>
                                <input
                                    type="tel"
                                    placeholder="Enter Your Phone Number"
                                    value={phone}
                                    disabled={phoned}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        checkPhone(e.target.value);
                                    }}
                                    className={phoneError ? "incorrect-input" : "correct-input"} />
                                    <p className="text-danger">{phoneError}</p>                            
                            </div>

                            <label> GENDER: </label>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" disabled={radiod} name="gender" value="MALE" onChange={(e) => setGender(e.target.value)} /> Male
                                <br />
                                <input type="radio" className="form-check-input" disabled={radiod} name="gender" value="FEMALE" onChange={(e) => setGender(e.target.value)} /> Female
                               <br />
                                <input type="radio" className="form-check-input" disabled={radiod} name="gender" value="OTHERS" onChange={(e) => setGender(e.target.value)} /> Others
                                <p className="text-danger">{genderError}</p>
                            </div>
                          
                            <br />

                            <div className="form-group mb-3">
                                <label>STATE:</label>
                                <select className="form-select" onChange={(e) => setSelect(e.target.value)} value={select}>
                                    <option value="" disabled className="bg-dark text-white" >Select Your State</option>
                                    <option value="TamilNadu">Tamil Nadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                                </select>
                                <p className="text-danger">{selectError}</p>                            
                </div>

                            <label>LANGUAGE:</label>
                            <div className="form-check">
                                <input type="checkbox" value="Tamil" onChange={(e) => handleCheckbox(e.target.value)} /> Tamil
                                <br />
                                <input type="checkbox" value="English" onChange={(e) => handleCheckbox(e.target.value)} /> English
                                <br />
                                <input type="checkbox" value="Hindi" onChange={(e) => handleCheckbox(e.target.value)} /> Hindi
                                <br />
                                <input type="checkbox" value="French" onChange={(e) => handleCheckbox(e.target.value)} /> French
                                <br />
                                <input type="checkbox" value="Spanish" onChange={(e) => handleCheckbox(e.target.value)} /> Spanish

                                <p className="text-danger">{checkboxError}</p>   
                            </div>
                                                    
                            
                        <br />

                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="Register" />
                            </div>
                        </form>
                    </div>

                    <div className="bg-primary p-3 text-white text-end mb-2">
                        <p>CopyRight By Savitha @ Fita Academy 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
