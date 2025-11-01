import React from 'react'


export default function Contact(props) {
  return (
    <>
    <div className="parent1">
        <h1>{props.qudrat}</h1>
    </div>
    <p>Inter your Text For Edit</p>
    <textarea name="text" id="text" rows={7}></textarea>
    <button id='btn'>Change To Uppercase</button>
    <button id='btn'>Change To Lowercase</button>
    <button id='btn'>Finish Extra Space</button>
    <button id='btn'>Copy</button>
    
    </>
  )
}
