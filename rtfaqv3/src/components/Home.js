import React from 'react';
import Login from "./Login";

const Home = (props) => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>{props.title}</p>
      <Login user={props.user} setUser={props.setUser}/>
    
    </div>
  );
};

export default Home;
