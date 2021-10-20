import React, {useState} from 'react';
import axios from 'axios'
import './Registration.css'

export const Registration = () => {

  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();

  const setregister=(e)=>{
    e.preventDefault()
    if(password!==confirmpassword){
      alert("password doesn't match")
      return 
    }
    
    axios.post("http://localhost:5000/", {fname: fname,lname: lname, email: email,number:number,password:password,confirmpassword:confirmpassword})
            .then(res => {
                console.log(res.data);
                alert('user has been added');
            })
            .catch(error => {
                console.log(error);
            });

    setfName('')
    setlName('')
    setEmail('')
    setnumber('')
    setpassword('')
    setconfirmpassword('')
  }
  
  return (
    <div className="register">
      <div className="container">
        <div className="title">
          Registration
        </div>
        <form onSubmit={setregister}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" placeholder="enter your first name" value={fname} onChange={(e) => {setfName(e.target.value)}} required/>
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="enter your last name" value={lname} onChange={(e) => {setlName(e.target.value)}} required/>
            </div>
            <div className="input-box">
              <span className="details">Email Id.</span>
              <input type="text" placeholder="enter your email id" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="number" placeholder="enter your phone number" value={number} onChange={(e) => {setnumber(e.target.value)}} required/>
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input type="password" placeholder="enter your password" value={password} onChange={(e) => {setpassword(e.target.value)}} required/>
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input type="password" placeholder="Confirm your Password" value={confirmpassword} onChange={(e) => {setconfirmpassword(e.target.value)}} required/>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register"/>
          </div>
        </form>
      </div>
    </div> 
  )
}
export default Registration;