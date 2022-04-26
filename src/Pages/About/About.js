import React from "react";
import Navbar from '../../NavBar/NavigationBar';
import Helmet from "react-helmet";
import FeaturesFinal from  './Features/FeaturesFinal'
import AuthorFinal from "./Authors/AuthorFinal";
import WhatFinal from "./What/whatfinal";






function AboutPage(){
     

  return(
   <div>
      
      <Navbar/>
      <WhatFinal/>
<FeaturesFinal/>
<AuthorFinal/>
    </div>
    
   
  );
      
    
}

export default AboutPage;