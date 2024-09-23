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

    // Validation functions...
    const checkName = (value) => { /*...*/ };
    const checkEmail = (value) => { /*...*/ };
    const checkPassword = (value) => { /*...*/ };
    const checkConfirmPassword = (value) => { /*...*/ };
    const checkPhone = (value) => { /*...*/ };
    const handleCheckbox = (value) => { /*...*/ };

    const handleSubmit = (event) => { /*...*/ };

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
                                    className={`form-control ${nameError ? 'is-invalid' : (name ? 'is-valid' : '')}`}
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        checkName(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">{nameError}</div>
                            </div>

                            <div className="form-group mb-3">
                                <label>EMAIL:</label>
                                <input
                                    type="email"
                                    className={`form-control ${emailError ? 'is-invalid' : (email ? 'is-valid' : '')}`}
                                    placeholder="Enter Email Id"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        checkEmail(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">{emailError}</div>
                            </div>

                            <div className="form-group mb-3">
                                <label>PASSWORD:</label>
                                <input
                                    type="password"
                                    className={`form-control ${passwordError ? 'is-invalid' : (password ? 'is-valid' : '')}`}
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        checkPassword(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">{passwordError}</div>
                            </div>

                            <div className="form-group mb-3">
                                <label>CONFIRM PASSWORD:</label>
                                <input
                                    type="password"
                                    className={`form-control ${confirmpasswordError ? 'is-invalid' : (confirmpassword ? 'is-valid' : '')}`}
                                    placeholder="Confirm Your Password"
                                    value={confirmpassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        checkConfirmPassword(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">{confirmpasswordError}</div>
                            </div>

                            <div className="form-group mb-3">
                                <label>PHONE:</label>
                                <input
                                    type="tel"
                                    className={`form-control ${phoneError ? 'is-invalid' : (phone ? 'is-valid' : '')}`}
                                    placeholder="Enter Your Phone Number"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                        checkPhone(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">{phoneError}</div>
                            </div>

                            <label> GENDER: </label>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" name="gender" value="MALE" onChange={(e) => setGender(e.target.value)} /> Male
                                <br />
                                <input type="radio" className="form-check-input" name="gender" value="FEMALE" onChange={(e) => setGender(e.target.value)} /> Female
                               <br />
                                <input type="radio" className="form-check-input" name="gender" value="OTHERS" onChange={(e) => setGender(e.target.value)} /> Others
                            </div>
                            <div className="text-danger">{genderError}</div>
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
                                <div className="text-danger">{selectError}</div>
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
                            </div>
                            <div className="text-danger">{checkboxError}</div>
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
