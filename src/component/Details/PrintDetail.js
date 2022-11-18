import React from "react";
import Card from "../UI/Card";
import classes from './PrintDetail.module.css'

 const PrintDetail=(props)=>{
// console.log(props)
 return (
    <Card className={classes.users}>
        <ul>
            {props.details.map((detail)=>(
                <li key={ Math.random().toString()}>
                    {detail.name} ({detail.age} years old)
                </li>
            ))}
        </ul>
    </Card>
 )  
 }

export default PrintDetail