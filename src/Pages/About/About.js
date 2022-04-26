import React from "react";
import Navbar from '../../NavBar/NavigationBar';
import Helmet from "react-helmet";
import FeaturesFinal from  './Features/FeaturesFinal'
import AuthorFinal from "./Authors/AuthorFinal";
import WhatFinal from "./What/whatfinal";
import TheFooter from "../../Components/AFooter";

function AboutPage(){
  return(
   <div>
      <Navbar/>
      <WhatFinal/>
      <FeaturesFinal/>
      <AuthorFinal/>
      <TheFooter />
    </div>
    
   
  );
      
    
}

export default AboutPage;