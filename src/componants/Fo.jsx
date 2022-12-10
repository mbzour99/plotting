import React, { useState } from  'react';
     
const Fo = () => {
    const [firstName, setFirstName] = useState("");
    const [fnameError, setFNameError] = useState("");
    const [lastName, setLastName] = useState("");
const [lNameError, setLNameError] = useState("");
    const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
const [passwordError, setPasswordError] = useState("");
    const [confirm ,setConfirmsPassword]=useState("");
    const [confirmError, setConfirmError] = useState("");

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName ,lastName ,email, password };
        console.log("Welcome", newUser);
    };

const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 1) {
        setFNameError("First name is required!");
    } else if(e.target.value.length < 2) {
        setFNameError("First Name must be 2 characters or longer!");
    } else {
        setFNameError("");
    }
}

 const handleLastName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 1) {
        setLNameError("Last name is required!");
    } else if(e.target.value.length < 2) {
        setLNameError("Last Name must be 2 characters or longer!");
    } else {
        setLNameError("");
    }
 }

 const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setEmailError("Email is required!");
    } else if(e.target.value.length < 2) {
        setEmailError("Email must be 2 characters or longer!");
    } else {
        setEmailError("");
    }
 }

 const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        setPasswordError("Passworrd is required!");
    } else if(e.target.value.length < 2) {
        setEmailError("Password must be 2 characters or longer!");
    } else {
        setEmailError("");
    }
 }


 const handleconfirm = (e) => {
    setConfirmsPassword(e.target.value);
    if(e.target.value.length < 1) {
        setConfirmError("confirm is required!");
    } else if(e.target.value.length < 2) {
        setConfirmError("Confirm must be 2 characters or longer!");
    } else {
        setConfirmError("");
    }
 }
    return(
    < >
        <form onSubmit={ createUser }>
            <div>
                <label>FirstName : </label> 
                <input type="text" onChange={ handleFirstName } />
            </div>
            <div>
                <label>LastName : </label> 
                <input type="text" onChange={ handleLastName } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword } />
            </div>
               <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleconfirm } />
            </div>
            <input type="submit" value="Create User" />
        </form>
<br></br>
<br>
</br>

<p>The First Name :{firstName} </p>
<p style={{color:'red'}}>{ fnameError }</p> :
<p>The Last Name :{lastName} </p>
<p style={{color:'red'}}>{ lNameError }</p> :
<p>The Email :{email} </p>
<p style={{color:'red'}}>{ emailError }</p> :
<p>The Password :{password} </p>
<p style={{color:'red'}}>{ passwordError }</p> :
<p>The confirm password :{confirm} </p>
<p style={{color:'red'}}>{ confirmError }</p> :

</>

    );
};
    
export default Fo;