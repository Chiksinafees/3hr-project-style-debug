import React, { useState } from "react";
import classes from "./InputDetails.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const InputDetails = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "please fill name and age ",
        msg: "Something went wrong!",
      });
      return;
    }
    if (+age < 1) {
      setError({ title: "Incorrect age( >0 )", msg: "Something went wrong!" });
      return;
    }
    const obj = { name: name, age: age };
    props.ondetail(obj);
    setName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={nameHandler}
            value={name}
          />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" onChange={ageHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default InputDetails;
