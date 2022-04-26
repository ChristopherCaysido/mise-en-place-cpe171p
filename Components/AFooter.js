import React from 'react'
import './Footer.css'

const TheFooter = () => {
  return (
    <div className='main-footer'>
        <div className = "container">
            <div className ="row">
                {/*Column 1*/}
                    <div className='col'>
                        <h3>Contact Us</h3>
                            <ul className='list-unstyled'>
                                <li>Intramuros, Manila, Metro Manila</li>
                                <li>Philippines</li>
                                <li>09056975974</li>
                            </ul>
                    </div>
                {/*Column 2*/}
                <div className='col'>
                        <h3>Follow</h3>
                            <ul className='list-unstyled'>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                                <li>Linkedin</li>
                            </ul>
                    </div>
                {/*Column 3*/}
                <div className='col'>
                        <h3>Overview</h3>
                            <ul className='list-unstyled'>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Press</li>
                            </ul>
                    </div>
                    <hr></hr>
                <div className="row">
                    <p className='col-sm' style={{textAlign:'center'}}>
                            &copy;{new Date().getFullYear()} All rights reserved to Mise en place
                    </p>

                </div>
            </div>
       </div>
    </div>     
  )
}

export default TheFooter;