// import { useState } from "react"
import React, {useState} from 'react'
import { Link } from "react-router-dom";
export default function Header(props) {
  const [text , setText] = useState('')
  const handleOnChange = (e)=>{
    setText(e.target.value)
  };
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  };
  
  const[allStayle, changeStyle] = useState({
    backgroundColor:'red',
    border: '1px solid white',
    color:'white'
 } )
 const[myContent, changeContent] = useState('Dark Mode')
  const handleDark = ()=>{
    if(allStayle.backgroundColor === 'red'){
      changeStyle({
        ...allStayle,
        backgroundColor: 'black',
        
      })
      changeContent('white Mode')
    }
    else{
      changeStyle({
        ...allStayle,
        backgroundColor:'red',
        
      })
      changeContent('Dark Mode')
    }
  }
  return (
    <>
     
       <div className="parent" style={allStayle}>
       <h1>{props.title}</h1>
       <nav>
          <Link to="/">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
     </div>
       <button id='btn' onClick={handleUpClick}>click</button>
      <textarea name="massage" id="massage" value={text} onChange={handleOnChange} rows='7' placeholder='texthere'></textarea>
      <button id='btn' onClick={handleDark}>{myContent}</button>

    </>
  )
}
// export default Header;
