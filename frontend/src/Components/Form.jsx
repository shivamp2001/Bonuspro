import React, { useState } from "react";
import "../App.css";
import { useFormik } from "formik";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Form = () => {
const navigate=useNavigate()
  const initialValues=  {
    fname: "",
    lname: "",
    address: "",
    pincode: "",
    monumber: "",
  }
  const onSubmit= (e) => {
// e.prevenDefault()
    sendRequest()
  //  sendRequest().then(data=>console.log(data))
  
  }
  const validate=(values)=>{
    let error={}
    
    if(!values.fname){
      error.fname=" Fname is Required "
    }else if(!/^[a-zA-Z]+$/.test(values.fname)){
      error.fname="Use only Alphabates"
    }
    if(!values.lname){
     error.lname="Lname is Required"
    }else if(!/^[a-zA-Z]+$/.test(values.fname)){
      error.fname="Use only Alphabates"
    }
    if(!values.address){
      error.address="Address is Required "
    }
    if(!values.pincode){
      error.pincode="Pincode is Required "
    }
    if(!values.monumber){
      error.monumber="Mobile Number is Required "
    }
    // console.log(error);
    return error
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  
  });
  // console.log(formik.errors);
  const sendRequest=async()=>{
    let res=await axios.post("http://localhost:5000/createform",{
      fname: String(formik.values.fname),
      lname: String(formik.values.lname),
      address:String(formik.values.address),
      pincode: String(formik.values.pincode),
      monumber: String(formik.values.monumber),
    }).then(()=>navigate("/user")).catch(err=>console.log(err))
    let data=await res.data 
    return data
  }
  // const[inputs,setinputs]=useState()
  return (
    <div className="mainform" >
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fname">FirstName</label>
        <input
         
          type="text"
          id="fname"
          name="fname"
          onChange={formik.handleChange}
          value={formik.values.fname}
          /> <p style={{margin:0,color:"red"}}>{formik.errors.fname}</p><br />

        <label htmlFor="lname">LastName</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={formik.handleChange}
          value={formik.values.lname}
        /><p style={{margin:0,color:"red"}}>{formik.errors.lname}</p><br />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        /><p style={{margin:0,color:"red"}}>{formik.errors.address}</p><br />

        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          onChange={formik.handleChange}
          value={formik.values.pincode}
        /><p style={{margin:0,color:"red"}}>{formik.errors.pincode}</p><br />

        <label htmlFor="monumber">MobileNo</label>
        <input
          type="number"
          id="monumber"
          name="monumber"
          onChange={formik.handleChange}
          value={formik.values.monumber}
        /><p style={{margin:0,color:"red"}}>{formik.errors.monumber}</p><br />
        <button className="btn" type="submit" >submit</button>
      </form>
    </div>
  );
};

export default Form;
