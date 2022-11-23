import React,{useContext} from "react";
import { Fragment } from "react";
import Login from "./component2/Login/Login";
import Home from "./component2/Home/Home";
import MainHeader from "./component2/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {

  const ctx= useContext(AuthContext)
  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
    </Fragment>
  );
}

export default App;
