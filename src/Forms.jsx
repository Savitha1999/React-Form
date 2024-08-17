
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'; // Make sure to define your styles in Form.css
import user from './images/users.png';
import emailIcon from './images/mails.png';
import phoneIcon from './images/mobile.png';

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

    // Validation functions
    const checkName = (value) => {
        if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            setNameError("Name should start with a capital letter and should not contain numbers");
        } else {
            setNameError("");
        }
    }

    const checkEmail = (value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setEmailError("Email is invalid");
        } else {
            setEmailError("");
        }
    }

    const checkPassword = (value) => {
        if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }
    }

    const checkConfirmPassword = (value) => {
        if (value !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    }

    const checkPhone = (value) => {
        if (!/^\d{10}$/.test(value)) {
            setPhoneError("Phone number should be 10 digits");
        } else {
            setPhoneError("");
        }
    }

    const handleCheckbox = (value) => {
        // Check if the checkbox value is already in the array
        if (checkbox.includes(value)) {
            // Remove the value from the array if already checked
            setCheckbox(checkbox.filter(item => item !== value));
        } else {
            // Add the value to the array if checked
            setCheckbox([...checkbox, value]);
        }
        // Clear checkbox error message if at least one checkbox is checked
        setCheckboxError("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform validation checks for all fields
        checkName(name);
        checkEmail(email);
        checkPassword(password);
        checkConfirmPassword(confirmpassword);
        checkPhone(phone);
        // Additional validation checks for gender, select, checkbox if required

        // If any validation error exists, prevent form submission
        if (nameError || emailError || passwordError || confirmpasswordError || phoneError || genderError || selectError || checkboxError == 0) {
            return;
        }

        // Proceed with form submission logic here
        toast.success("Form submitted successfully!");
    }

    return (
        <div className="container w-50">
            <div className="bg-primary text-white text-center mt-2 p-4">
                <h1>FORM VALIDATION</h1>
            </div>
            <ToastContainer />

            <div className="forms bg-light p-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>NAME:</label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                checkName(e.target.value);
                            }}
                            style={{ borderColor: nameError ? 'red' : (name ? 'green' : 'black') }}
                        />
                        <p className="text-danger">{nameError}</p>
                    </div>

                    <div className="form-group">
                        <label>EMAIL:</label>
                        <input
                            type="email"
                            placeholder="Enter Email Id"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                checkEmail(e.target.value);
                            }}
                            style={{ borderColor: emailError ? 'red' : (email ? 'green' : 'black') }}
                        />
                        <p className="text-danger">{emailError}</p>
                    </div>

                    <div className="form-group">
                        <label>PASSWORD:</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                checkPassword(e.target.value);
                            }}
                            style={{ borderColor: passwordError ? 'red' : (password ? 'green' : 'black') }}
                        />
                        <p className="text-danger">{passwordError}</p>
                    </div>

                    <div className="form-group">
                        <label>CONFIRM PASSWORD:</label>
                        <input
                            type="password"
                            placeholder="Confirm Your Password"
                            value={confirmpassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                checkConfirmPassword(e.target.value);
                            }}
                            style={{ borderColor: confirmpasswordError ? 'red' : (confirmpassword ? 'green' : 'black') }}
                        />
                        <p className="text-danger">{confirmpasswordError}</p>
                    </div>

                    <div className="form-group">
                        <label>PHONE:</label>
                        <input
                            type="tel"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                checkPhone(e.target.value);
                            }}
                            style={{ borderColor: phoneError ? 'red' : (phone ? 'green' : 'black') }}
                        />
                        <p className="text-danger">{phoneError}</p>
                    </div>

                    <label> GENDER : </label>
                <input type="radio" name="gender"  value="MALE" onChange={(e) => setGender(e.target.value)} /> Male
                <input type="radio" name="gender" className="gender" value="FEMALE" onChange={(e) => setGender(e.target.value)} /> Female
                <input type="radio" name="gender" className="gender" value="OTHERS" onChange={(e) => setGender(e.target.value)} /> Others
                <p className="text-danger">{genderError}</p>
                <br />

                <label> STATE : </label>
                <select onChange={(e) => setSelect(e.target.value)} value={select}>
                    <option value="" style={{color:"black" , backgroundColor:"white"}}>Select Your State</option>
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
                <br />

                <label> LANGUAGE : </label>
                <input type="checkbox"  value="Tamil" onChange={(e) => handleCheckbox(e.target.value)} /> Tamil
                <input type="checkbox" className="check" value="English" onChange={(e) => handleCheckbox(e.target.value)} /> English
                <input type="checkbox" className="check" value="Hindi" onChange={(e) => handleCheckbox(e.target.value)} /> Hindi
                <input type="checkbox" className="check" value="French" onChange={(e) => handleCheckbox(e.target.value)} /> French
                <input type="checkbox" className="check" value="Spanish" onChange={(e) => handleCheckbox(e.target.value)} /> Spanish
                <p className="text-danger">{checkboxError}</p>
                <br />
                <br />
                    
                    <div className="form-group">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>

            <div className="bg-primary p-3 text-white text-end mb-2">
                <p>CopyRight By Savitha @ Fita Academy 2024</p>
            </div>
        </div>
    );
}
