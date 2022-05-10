import React from 'react';
import { useState } from 'react';
import './Slider.css'
import sliderData from './SliderData.js'
import BtnSlider from './BtnSlider.js'

export default function Slider(){
    const [slideIndex,setSlide] = useState(0);
    function nextSlide() {
        if (slideIndex !== sliderData.length - 1){
            setSlide(slideIndex+1);
        }
        else if(slideIndex === sliderData.length - 1){
            setSlide(0);
        }
    }
    function prevSlide(){
        if (slideIndex !== 0){
            setSlide(slideIndex-1)
        }
        else if(slideIndex === 0){
            setSlide(sliderData.length - 1)
        }
    }
    return(
        <div className='container-slider'>
            {sliderData.map((obj,index) => {
                return(
                    <div 
                    key={obj.id} 
                    className={slideIndex === index ? 'slide active-anim' : 'slide'}>
                        <img
                        src={process.env.PUBLIC_URL+'/Imgs/cookingImg'+index+'.jpg'} alt={'cooking'+index} >
                        </img>
                        <h1 className='slide-title'>{obj.sliderTitle}</h1>
                        <p className='slide-descrip'>{obj.sliderDesc}</p>
                    </div>
                        
                    )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </div>
            
    )    
}
