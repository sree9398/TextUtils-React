import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Text converted to UpperCase ","success");
    }
    const handleLoclick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Text converted to LowerCase ","success");
  }
  const handleClear=()=>{
    setText("");
    props.showAlert("Text Cleared  ","success");
}

    const handleOnChange=(event)=>{
        setText(event.target.value);  
    }
    const [text,setText]=useState("");
    const handleCopy=()=>{
      var textToCopy=document.getElementById("exampleFormControlTextarea1");
      // textToCopy.select();
      // alert("Text Copied to clip board successfully")
      // textToCopy.setSelectionRange(0,9999);
      navigator.clipboard.writeText(textToCopy.value);
      props.showAlert("Text Copied to ClipBoard successfully ","success");
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces from the Text ","success");
    }
    return (
    <>
  
  <div className="container" style={{ color: props.mode==='light'?'white':'grey'}}>
    <label htmlFor="exampleFormControlTextarea1" style={{ color: props.mode==='black'}} className="form-label">
      <h4 style={{ color: props.mode==='dark'?'white':'#042743'}}> {props.heading}</h4>
   </label>
    <textarea 
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={8}
      value={text}
      onChange={handleOnChange} 
      style={{ backgroundColor: '#e8e4cc' ,color: props.mode==='black'}}
      
    />
    <div className="d-flex p-1 flex-fill" style={{ backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='light'?'#042743':'white'}}>
      <button  className="btn btn-primary bg-#042743 m-2" onClick={handleOnClick}>Convert to UpperCase</button>
        <button  className="btn btn-primary bg-#042743 m-2" onClick={handleLoclick}>Convert to LowerCase</button>
        <button  className="btn btn-primary bg-#042743 m-2" onClick={handleClear}>Clear Text</button>
        <button  className="btn btn-primary bg-#042743 m-2" onClick={handleCopy}>Copy Text</button>
        <button  className="btn btn-primary bg-#042743 m-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>

    </div>
  </div>
  
    <div className="container my-3" style={{ color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/[ ]+/).length} words and {text.length} Characters</p>
      <p>Charcaters Count without spaces {text.split(' ').join('').length}</p>
      <p>No of Spaces {text.length-text.split(" ").join('').length}</p>
      <p>{0.008*text.trim().split(' ').length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
</>

    )
}
