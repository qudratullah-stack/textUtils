import React, {useState ,useRef} from 'react'

export default function Contact(props) {
  const [text, changetext] = useState('')
  const textref = useRef();
  const parent_color = useRef();
  const pragraph = useRef();
  const handlevalue = (e)=>{
    changetext(e.target.value)
  }
  const touppercase = ()=>{
    changetext(text.toUpperCase())}
    const tolowercase = ()=>{
    changetext(text.toLowerCase())}
  const copy = ()=>{
    navigator.clipboard.writeText(textref.current.value);
  }
  const extraspace = ()=>{
   let newtext = (text.replace(/[ ]+/g,''))
    changetext(newtext.join(' '));
  }
  const [mode, changemode] = useState('Dark Mode')
  const darkmode = ()=>{
    if(mode ==="Dark Mode"){
      parent_color.current.style.backgroundColor ='#0d0da1ff'
      document.body.style.backgroundColor = '#030338ff'
      textref.current.style.backgroundColor = 'gray'
      textref.current.style.color = 'white'
      changemode('white mode')
      pragraph.current.style.color = 'white'
    }
    else{
      parent_color.current.style.backgroundColor = '#06355cff'
      document.body.style.backgroundColor = 'white'
      textref.current.style.backgroundColor = 'white'
      pragraph.current.style.color = 'black'
      changemode('Dark Mode')
      

    }
  }
  return (
    <>
    <div className="parent1" ref={parent_color}>
        <h1>{props.qudrat}</h1>
       <button id='btn2' onClick={darkmode}>{mode}</button>
    </div>
    <div className="child">
    <p ref={pragraph}>Inter your Text For Edit</p>
    <textarea name="text" id="text" rows={12} ref={textref} value={text} onChange={handlevalue} ></textarea>
      <div className="box1">
      <button id='btn' onClick={touppercase}>Change To Uppercase</button>
      <button id='btn' onClick={tolowercase}>Change To Lowercase</button>
      <button id='btn' onClick={extraspace}>Finish Extra Space</button>
      <button id='btn' onClick={copy}>Copy</button>
      </div>
    </div>
    
    </>
  )
}
