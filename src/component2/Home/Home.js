import React from 'react';

import Card2 from '../UI-2/Card2/Card2';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card2 className={classes.home}>
      <h1>Welcome back!</h1>
    </Card2>
  );
};

export default Home;
