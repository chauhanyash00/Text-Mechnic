// import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("Input Your Text");
    //  setText("Enter Your text");

    const handleOnChange = (event) => {
      console.log("On change");
      setText(event.target.value);
    }

    const handleUpChange = () => {
      // console.log("Btn Click");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase" , "primary");
    }

    const handleLoChange = () => {
      // console.log("Btn Click");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase" , "info");

    }

    const handlecopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copy on Clipboard" , "danger");


    }

    const handleSpeak = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
      props.showAlert("Your Text Speek" , "success");

    }

    const handleclear = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Converted to Clear" , "warning");
    }

    const handleRSpace = () => {
      let newText = text.split(/ [ ] + /);
      setText(newText.join(" "));
      props.showAlert("Your Extra Space Remove" , "danger");

    }

  return (
    <div>
      <div className=" container my-3">
        <h1>{props.heading}</h1>
            <textarea  className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
            <button className='btn btn-outline-primary mx-2 my-2' disabled={text.length === 0} onClick={handleUpChange}>Convert to Upeer Case</button>
            <button className='btn btn-outline-info    mx-2' disabled={text.length === 0} onClick={handleLoChange}>Convert to Lower Case</button>
            <button className='btn btn-outline-success mx-2' disabled={text.length === 0} onClick={handleSpeak}>Speak</button>
            <button className='btn btn-outline-success mx-2' disabled={text.length === 0} onClick={handlecopy}>Copy</button>
            <button className='btn btn-outline-warning mx-2' disabled={text.length === 0} onClick={handleclear}>clear</button>
            <button className='btn btn-outline-danger  mx-2' disabled={text.length === 0} onClick={handleRSpace}> Remove Extra Space</button>
    </div>

    <div className={"container"}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words</p>
      <p>{text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Reading Time</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text : "Nothing To Privew !"}</p>
    </div>

    </div>
  ) 
}
