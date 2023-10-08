import React from 'react'
import "./InputBox.css"

const InputBox = (props) => {

    const inputChangeHandler = (e) => {

        console.log(props.emailDetails)
        props.setEmailDetails(
            {...props.emailDetails,
            [`${props.id}`]:e.target.value}
        )
    }

  return (
    <div className="container">
        <p>{props.label}</p>

        <input className='input' value={props.emailDetails[`${props.id}`]} 
        onChange={inputChangeHandler}
        ></input>
    </div>
  )
}

export default InputBox