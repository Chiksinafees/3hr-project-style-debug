import React, { useState, useRef } from "react";
import classes from "./InputDetails.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const InputDetails = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const collegeRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const UserName = nameRef.current.value;
    const UserAge = ageRef.current.value;
    const UserCollegeName = collegeRef.current.value;

    if (
      UserName.trim().length === 0 ||
      UserAge.trim().length === 0 ||
      UserCollegeName.trim().length === 0
    ) {
      setError({
        title: "please fill ALL details",
        msg: "Something went wrong!",
      });
      return;
    }
    if (+UserAge < 1) {
      setError({ title: "Incorrect age( >0 )", msg: "Something went wrong!" });
      return;
    }
    const obj = { name: UserName, age: UserAge, college: UserCollegeName };
    props.ondetail(obj);
    nameRef.current.value = "";
    ageRef.current.value = "";
    collegeRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="collegeName">College Name</label>
          <input type="text" id="collegeName" ref={collegeRef} />
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameRef} />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" ref={ageRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default InputDetails;
