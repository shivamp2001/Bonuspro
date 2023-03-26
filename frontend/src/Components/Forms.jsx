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
      <button style={{padding:10,marginLeft:1000, background:"skyblue"}} onClick={redirect}>Show Next feature</button>
    </div>
  );
};

export default Forms;
