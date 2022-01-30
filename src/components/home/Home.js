import React from 'react';
import ExpertiseBlock from '../expertiseBlock/ExpertiseBlock';
import Navbar from '../navbar/Navbar';
import useStyles from "./styles";


function Home() {
  const classes=useStyles();
  return <div className={classes.home}>
    <Navbar/>
    <h1 className={classes.mainContent}>
    WE DELIVER PERFORMANCE IMPROVEMENT
    <span className={classes.para}>Through AI-led digital trnsformation</span>
    </h1> 
     <ExpertiseBlock className={classes.expertiseBlock}/>
  </div>
}

export default Home;
