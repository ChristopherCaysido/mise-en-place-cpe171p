import React from "react";
import Features from './Features'
import '../Features/fflexbox.css'

function limitChar120(description){
    return description.substring (0,120)+'... ';
}

const Desctext = 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';

function FeaturesFinal(){
    return(
        <div className = 'fflexbox-container'>
            <Features title = 'Feature 1' descrip={limitChar120(Desctext)} imgurl = 'https://wallpaperaccess.com/full/302495.jpg'/>
            <Features title = 'Feature 2' descrip={limitChar120(Desctext)} imgurl = 'https://wallpaperaccess.com/full/302495.jpg'/>
            <Features title = 'Feature 3' descrip={limitChar120(Desctext)} imgurl = 'https://wallpaperaccess.com/full/302495.jpg'/>
            <Features title = 'Feature 4' descrip={limitChar120(Desctext)} imgurl = 'https://wallpaperaccess.com/full/302495.jpg'/>
        </div>
    );

}

export default FeaturesFinal;