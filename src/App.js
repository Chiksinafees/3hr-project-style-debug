import React, { Fragment, useState } from "react";
import "./App.css";
import InputDetails from "./component/Details/InputDetails";
import PrintDetail from "./component/Details/PrintDetail";

const App = () => {
  const [detail, setDetail] = useState([]);

  const detailHandler = (obj) => {
    setDetail((prevData) => {
      return [...prevData, obj];
    });
  }; // both same=>   <fragment> </fragment> || <> </>

  return (
    <Fragment>
      <InputDetails ondetail={detailHandler} />
      <PrintDetail details={detail} />
    </Fragment>
  );
};

export default App;
