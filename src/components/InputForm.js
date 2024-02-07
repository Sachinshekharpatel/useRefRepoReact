import React, { useState, useRef } from "react";
import './input-form.css';
import ErrorPopup from "./Error";

const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [userData, setUserData] = useState({ name: '', age: 0, id: 0, key: '' });
  const [value, setValue] = useState(false);

  // const handlename = (e) => {
  //   e.preventDefault();
  //   // console.log(nameInputRef)
  //   if (e.target.value.trim().length === 0) {
  //     return;
  //   } else if(e.target.value.trim().length > 0){
  //     const y = { ...userData, name: e.target.value };
  //     setUserData(y);
  //   }
  // };

  // const handleage = (e) => {
  //   e.preventDefault();
  //   if (e.target.value.trim().length === 0) {
  //     return;
  //   } else {
  //     const y = { ...userData, age: e.target.value, id: Math.random().toString(), key: Math.random().toString() };
  //     setUserData(y);
  //   }
  // };

  const senddata = (e) => {
    e.preventDefault();
    console.log(nameInputRef)
    const UserName = nameInputRef.current.value;
    const UserAge = ageInputRef.current.value
    // console.log("inside Form Component sendaata");
    if (UserName.trim().length === 0) {
      setValue(true);
      return;
    } else if (Number(UserAge) < 1 || Number(UserAge) > 120) {
      setValue(true);
      return;
    } else {
       const y = { name: UserName, age: UserAge, id: Math.random().toString(), key: Math.random().toString() };
      props.handleAllData(y);

      // setUserData(y);
      nameInputRef.current.value="";
      ageInputRef.current.value='';

    }
  };
  const errorHandler = () =>{
    setValue(false) ;
  }

  return (
    <div>
      {value && <ErrorPopup title="Error ocurred" errorbtn={errorHandler}></ErrorPopup>}
      
      <div className='input-form'>
        <form>
          <label>Username:</label>
          <input type='text' placeholder='Enter Name' ref={nameInputRef}></input>
          <label> Age:</label>
          <input type='number' min='0' max='100' placeholder='Enter Age' ref={ageInputRef}></input>
          <button type='submit' onClick={senddata}>Add User</button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
