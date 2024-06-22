import React, { useState } from 'react';
import './form.css';

const FormVal = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [error, setError] = useState("");

    const validateForm = () => {
        const errors = {};

        if (!name) {
            errors.name = 'Name is Required';
        }

        if (!email) {
            errors.email = 'Email is Required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Invalid Email";
        }

        if (!password) {
            errors.password = 'Password is Required';
        } else if (password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
        }

        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm Password is Required';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        if (!age) {
            errors.age = 'Age is Required';
        } else if (isNaN(age) || age < 18) {
            errors.age = "Age must be a number and >= 18";
        }

        if (!sex) {
            errors.sex = 'Sex is Required';
        }

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        } else {
            console.log(`Form Submitted`);
        }
    };

    return (
        <div className='container'>
            <h1>Form Validation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    {error.name}
                </div>
                <br />
                <div>
                    <label>Email : </label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    {error.email}
                </div>
                <br />
                <div>
                    <label>Password : </label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />                    
                    {error.password}
                </div>
                <br />
                <div>
                    <label>Confirm Password : </label>
                    <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                    {error.confirmPassword}
                </div>
                <br />
                <div>
                    <label>Age : </label>
                    <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
                    {error.age}
                </div>
                <br />
                <div>
                    <label>Sex : </label>
                    <select value={sex} onChange={(event) => setSex(event.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {error.sex}
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default FormVal;

