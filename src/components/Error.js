import React, { useState } from "react";
import './Error.css';
import ReactDom from 'react-dom'

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.errorbtn}></div>
  )
}
const Overlay = (props) => {
  return (
    <div className="Error-div">
    <header>
     <h2>{props.name}</h2>
    </header>
    <div>
     <p>Error Occured</p>
    </div>
    <footer>
     <button style={{margin:"10px"}} onClick={props.errorbtn}>
       Okay
     </button>
    </footer>
  </div>
  )
}


const ErrorPopup = (props) => {
  return (
   <React.Fragment>
     {ReactDom.createPortal(<Backdrop errorbtn={props.errorbtn}/>, document.getElementById('Backdrop-root'))}
     {ReactDom.createPortal(<Overlay name={props.name} errorbtn={props.errorbtn}/>, document.getElementById('Overlay-root'))}
   </React.Fragment>
  )
}

export default ErrorPopup;
