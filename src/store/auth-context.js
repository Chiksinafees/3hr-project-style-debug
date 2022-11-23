import React, { useState,useEffect } from "react";

let AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const LoggedInInfo = localStorage.getItem("loggedIn");

    if (LoggedInInfo === "1") {
      setLoggedIn(true);
    }
  }, []);


  const loginHandler = () => {
    localStorage.setItem("loggedIn", "1");
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
