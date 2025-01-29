import React,{useState} from 'react';

export default function TextForm(props) {
    const [text,setText]  = useState('Enter Text Here');
    const handleUpClick = () => {
        console.log("upper case was cicked")
        setText(text.toUpperCase())
        props.alert("success","Converted To Upper Case");

    }
    const handlelowClick = () => {
        console.log("lower case case was cicked")
        setText(text.toLowerCase());
        props.alert("success","Converted To Lower Case");

    }

    const handleCopy = () =>{
        console.log("calling handle copy function");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.alert("success","Text Copied! ");
    }

    const clearText = () =>{
        let text = '';
        setText(text);
        props.alert("success","Text Cleared! ");
    }


    const handleOnChange = (event) =>{
        console.log('on change');
        setText(event.target.value)
    }
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'dark'}}>
            <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.name}</h1>
            <div className="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handlelowClick}>Convert to lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode == 'dark' ? 'white' : 'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Summary</h1>
            <p>{text}</p>
        </div>
        </>
        
    )
}
