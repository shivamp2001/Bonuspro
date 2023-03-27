import React, { useState } from "react";
let arr=[]
const Actionbtn = () => {
  const [btn, setbtn] = useState();
  const [clicktime, setclicktime] = useState();
  const fun1 = () => {
    let btna = "Button A";
    let time = new Date().toLocaleTimeString()
    // let now=time
    arr=btna
    setbtn(btna);
    setclicktime(time);
  };
  const fun2 = () => {
    let btna = "Button B";
    let time = new Date().toLocaleTimeString()
    setbtn(btna);
    setclicktime(time);
  };
  const fun3 = () => {
    let btna = "Button C";
    let time = new Date().toLocaleTimeString()
    setbtn(btna);
    setclicktime(time);
  };
  const fun4 = () => {
    let btna = "Button D";
    let time = new Date().toLocaleTimeString()
    setbtn(btna);
    setclicktime(time);
  };
  
  return (
    <div style={{background:"#CCFFE5", width:1440,height:751}}>
      <div
        style={{
            padding:5,
            width:250,
            height:150,
          boxSizing: "border-box",
          alignItems: "center",
          marginTop: 30,
          marginLeft: 550,
          border: "2px solid black",
          background:"#CCCCFF"
        }}
      >
        <h2>
          Button Name <span style={{ marginLeft: 50 }}>Time</span>
        </h2>
        <br />
        <p >{btn}  <span style={{paddingLeft:70}}>{clicktime}</span></p>

        {/* <p>{btn}</p> */}
      </div>
      <div className="buttons">
        <button onClick={fun1}>Button A</button>
        <button onClick={fun2}>Button B</button>
        <button onClick={fun3}>Button C</button>
        <button onClick={fun4}>Button D</button>
        
      </div>
    </div>
  );
};

export default Actionbtn;
