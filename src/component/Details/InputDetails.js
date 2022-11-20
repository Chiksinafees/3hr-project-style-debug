import React, { useState, useEffect } from "react";
import classes from "./InputDetails.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const InputDetails = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [college, setCollege] = useState("");
  const [error, setError] = useState();
  const [collegeRequired, setCollegeRequired] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const collegeHandler = (e) => {
    setCollege(e.target.value);
  };

  useEffect(() => {
    setCollegeRequired(college.trim().length === 0);
  }, [name, age, college]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      age.trim().length === 0 ||
      college.trim().length === 0
    ) {
      setError({
        title: "please fill ALL details",
        msg: "Something went wrong!",
      });
      return;
    }
    if (+age < 1) {
      setError({ title: "Incorrect age( >0 )", msg: "Something went wrong!" });
      return;
    }
    const obj = { name: name, age: age, college: college };
    props.ondetail(obj);
    setName("");
    setAge("");
    setCollege("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          msgname={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeName"
            value={college}
            onChange={collegeHandler}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={nameHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" value={age} onChange={ageHandler} />
          <Button type="submit" disable={collegeRequired}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default InputDetails;
