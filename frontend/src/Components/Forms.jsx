import React, { useEffect, useState } from "react";
import axios from "axios";
import UserData from "./UserData";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const Forms = () => {
  const [user, setUser] = useState([]);
  let navigate=useNavigate()

  const redirect=()=>{
navigate("/buttons")
  }
  const redirect2=()=>{
navigate("/")
  }
  const fetchform = async () => {
    let res = await axios
      .get("http://localhost:5000/getallform")
      .catch((err) => console.log(err));
    let data = await res.data.data

    console.log(data);
    return data;
  };
  useEffect(() => {
    fetchform().then((data) => setUser(data));

    // fetchform().then(data=>console.log(data));
  }, []);
  // console.log(user.data);
  return (
    <div>
      <table>
        <thead>
     
            {/* <th style={{marginLeft:0}}>Fname</th>
            <th>Lname</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>MobileNo</th> */}
          
        </thead>
      
          <UserData user={user} />
       
      </table>
      <div >
      <button style={{padding:10,marginLeft:250,background:"skyblue"}} onClick={redirect2}>Add New User</button>
      <button style={{padding:10,marginLeft:700,background:"skyblue"}} onClick={redirect}>Show Next feature</button></div>
    </div>
  );
};

export default Forms;
