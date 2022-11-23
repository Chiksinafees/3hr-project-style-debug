import React, { useContext } from 'react';
import Button2 from '../UI-2/Button2/Button2';
import Card2 from '../UI-2/Card2/Card2';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';

const Home = () => {

  const authCtx=useContext(AuthContext)
  
  return (
    <Card2 className={classes.home}>
      <h1>Welcome back!</h1>
      <Button2 onClick={authCtx.onLogout}>Logout</Button2>
    </Card2>
  );
};

export default Home;
