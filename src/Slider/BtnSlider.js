import React from 'react';
import './Slider.css';
import leftArrow from './icons/leftarrow.svg';
import rightArrow from './icons/rightarrow.svg';
import PropTypes from 'prop-types';


function BtnSlider({direction, moveSlide}){
    return (
        <div>
            <button className={direction==='next' ? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide}>
                <img src={direction==='next' ? rightArrow : leftArrow} alt={direction==='next' ? 'right-button':'left-button'}/>
            </button>
        </div>
    )
}

BtnSlider.propTypes = {
    direction: PropTypes.string,
    moveSlide: PropTypes.func
}

export default BtnSlider;