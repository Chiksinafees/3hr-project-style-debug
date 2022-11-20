import React from "react";
import Card from "../UI/Card";
import classes from "./PrintDetail.module.css";

const PrintDetail = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.details.map((detail) => (
          <li key={Math.random().toString()}>
            College={detail.college}, Name={detail.name}, age=({detail.age}{" "}
            years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PrintDetail;
