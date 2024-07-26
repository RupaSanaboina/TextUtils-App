import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpperCaseClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","Success")
    }
    const handleLowerCaseClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower case","Success")

    }
    const handleClearText=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text is cleared", "Success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      
    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    
  return (
    <>
    <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
    

  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}rows="8" style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>convert to upper case</button>
<button className='btn btn-primary mx-2' onClick={handleLowerCaseClick}>convert to lower case</button>
<button className='btn btn-primary mx-2' onClick={handleClearText}>Clear text</button>
<button className='btn btn-primary mx-2' onClick={speak}>Speak</button>

    </div>
    <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
