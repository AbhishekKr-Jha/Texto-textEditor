import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
   <>
   <div className="container d-flex flex-column justify-content-center align-items-center textoC" >
    <h1>Texto-The Text Editor</h1>
<Link to='/texto'><button type="button" className="btn btn-secondary m-3 fw-semibold">Enter Texto</button></Link>
   </div>
   
   
   </>
  )
}
