
import React from "react";
import classes from './ReusableInput.module.css'


const ReusableInput=(props)=>{

  return (
        <div className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.id}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    )

}

export default ReusableInput