import React, { useState } from 'react';



export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("You pressed the up button!" + text);
    var newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    var newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = () => {
    //alert("You pressed the OnChange button!");
    setText(event.target.value)
  }
  const handleClear = () => {
    setText("")

  }
  const handleCopy = () => {
    //alert("copied")
    var text = document.getElementById("myBox")
    text.select();
    document.execCommand("copy");
    //navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState('');

  return (
    <>
      <div className="conatainer">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" placeholder="Enter Text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpace}>Extra Space</button>
      </div>
      <div className='conatainer my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The Text-Box Above To Preview It Here..."}</p>
      </div>
    </>
  )
}