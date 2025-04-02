import React from "react";
import "./style.css";
import {useState} from "react"
export default function App() {
  return (
    <div className= "main">
      <Properties Image_src="https://th.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?rs=1&pid=ImgDetMain" name="Vaageesh" post="Software Engineer"/>
      <Buttons/>
    </div>
  );
}

function Properties({Image_src, name, post}){
    return (
      <div className="Prop">
        <img id="imagestyle" src={Image_src} alt="unavalaible"/>
        <h1>{name}</h1>
        <h2>{post}</h2>
      </div>
    )
}

function Buttons(){
  const [follbut, setFollbut] = useState(false)
  const following = ()=>{
    follbut ? setFollbut(false) : setFollbut(true)
  }
  return (
    <div>
      <div className="button">
        <button id="b">Message</button>
        {follbut ? <button id="b" onClick={following}style={{backgroundColor: follbut ? "blue" : null ,color: "white"}}>Following</button> : <button id="b" onClick={following}>Follow</button>}
      </div>
    </div>
  )
}