import React from 'react'
 import {useState,useEffect} from 'react';
function Boxmess() {


const [email,setEmail]=useState('')
const[mess,setMess]=useState('')
//const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
const SendMessage= async ()=>{

const response = await fetch("https://resumeapi17.azurewebsites.net/api/mailfunc?code=kxCChxRwpB9CWrer-iws-PbojxZC-hFJJqujzOrgRMVxAzFuEDdtjg==", {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({"email":email, "name":"Recruiter","message":mess}),
});

response.json().then(data => {
  console.log(data);
});



  console.log(email+mess +'parti')

  
}
// const showAlert = (show = false, type = '', msg = '') => {
//     setAlert({ show, type, msg });
// }
const handleSubmit=(e)=>{
  e.preventDefault();
  
  setEmail('')
  setMess('')
}
  return (
    <div className="">
    <form onSubmit={handleSubmit} >
      <label htmlFor='email' className='emai' >
        Email: 
      </label>
      <input name='email' type='text' value={email}  onChange={(e)=>setEmail(e.target.value)}/> <br />
      <label htmlFor="message" >  
      </label>
     <textarea className='mess' type='text' value={mess} name='message' onChange={(e)=>setMess(e.target.value)}  placeholder='Please leave a message....' cols="40" rows="5"></textarea> <br />
      <button className='btn1' type='submit' onClick={()=> SendMessage()}>SendEmail</button>
    </form>
    </div>
  );
}


export default Boxmess

// <input className='mess' type="text" name='message' onChange={(e)=>setMess(e.target.value)}  placeholder='Please leave a message....'/>  <br />