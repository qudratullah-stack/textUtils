



import React, {useState} from 'react'


export default function Contact(props) {
  const [text, changetext] = useState('')
  const handlevalue = (e)=>{
    changetext(e.target.value)
  }
  const touppercase = ()=>{
    changetext(text.toUpperCase())}
    const tolowercase = ()=>{
    changetext(text.toLowerCase())}
  return (
    <>
    <div className="parent1">
        <h1>{props.qudrat}</h1>
    </div>
    <div className="child">
    <p>Inter your Text For Edit</p>
    <textarea name="text" id="text" rows={7} value={text} onChange={handlevalue} ></textarea>
      <div className="box1">
      <button id='btn' onClick={touppercase}>Change To Uppercase</button>
      <button id='btn' onClick={tolowercase}>Change To Lowercase</button>
      <button id='btn'>Finish Extra Space</button>
      <button id='btn'>Copy</button>
      </div>
    </div>
    
    </>
  )
}
