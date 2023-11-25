import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const userid = 1;
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/userrecords/${userid}`}>User Record</Link>
    </div>
  )
}

export default Home
