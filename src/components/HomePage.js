import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// remember and run the seedFile in dev to commit the data to localstorage...
import '../seed-data/projects-seed.js'

const HomePage = () => {

  const projects = useState([])

  const [ latestProjects, setLatestProjects ] = useState([]);


  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage
