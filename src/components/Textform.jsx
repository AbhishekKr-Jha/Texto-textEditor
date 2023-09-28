import React, { useState } from 'react'

export default function TextForm(props) {
  
  const [text, settext] = useState(' ');

  const textvalue = (e) => {
    console.log('word typed')
    let a = e.target.value
    settext(a)
  }
  const upbtn = () => {
    console.log('upbtn clicked')
    settext(text.toUpperCase())
  }
  const lowbtn = () => {
    console.log('lowbtn clicked')
    settext(text.toLowerCase())
  }
  const cleartext = () => {
    console.log('clear text clicked')
    settext(" ")
  }
 
  return (

    <div className='container '>

      <h2 className='my-4'>{props.heading}</h2>
      <textarea className="form-control inputbox fs-5 "  value={text} onChange={textvalue} style={{fontWeight:"600"}} id="exampleFormControlTextarea1" rows={6}></textarea>
      <button className="btn btn-primary my-4 mx-5 "  onClick={upbtn}>To UPPER Case</button>
      <button className="btn btn-primary my-4 mx-5"   onClick={lowbtn}>To lower Case</button>
      <button className="btn btn-primary my-4 mx-5 "   onClick={cleartext}>Clear Text</button>
      <hr />
      <h2>Preview</h2>
      <p className='preview' >
        {text}
      </p>
      <hr />

    </div>
  )
  }
