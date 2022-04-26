import React from "react";
import '../What/Whatflex.css';
import { What } from "./what";

function limitChar1000(description){
    return description.substring (0,1000);
}

const IntroText = 'This application provides convenience to its users. It is an application that can guide its users throughout their cooking process by letting know which step is next, It also provides special features that allow users to list down the necessary ingredients for a certain recipe. Lastly, the application can save and list down previous recipes added by the users.';

function WhatFinal(){
    return(
        <div className = 'whatflexbox-container'>
            <What title = 'What is Mise en Place?' descrip={limitChar1000(IntroText)}/>
        </div>
    );

}

export default WhatFinal;