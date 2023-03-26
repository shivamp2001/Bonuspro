import React from "react";
const UserData = (props) => {
  const { user } = props;
  console.log(user);
  return (
   
    <div>
      {/* <h1 style={{marginLeft:20}}>fname </h1> */}
      <div className="list">
      <ul> 
        <li className="li1">Fname</li>
        <li className="li2">Lname</li>
        <li className="li3">Address</li>
        <li className="li4">Pincode</li>
        <li className="li5">MobileNo</li>
      </ul>
      </div>
      {user.map((curuser, i) => {
        const { fname, lname, address, pincode, monumber } = curuser;
        return (
          <tr>
            <td key={i} >{fname}</td>
            <td style={{marginRight:200}}>{lname}</td>
            <td>{address}</td>
            <td>{pincode}</td>
            <td>{monumber}</td>
          </tr>
        );
      })}
     
    </div>
  
  );
};

export default UserData;
