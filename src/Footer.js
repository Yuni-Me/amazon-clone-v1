import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-alink'><a href='#header'>Back to top</a></div>
            <div className='Footer-Accessibility'>
            <div className='Footer-logo'>
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} alt='Amazon logo' />
                </div>
            </div>
            <div className='Footer-Copyright'>
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Interest-Based Ads</span>
                <span>@2019-2021, YHackR.com</span>
            </div>
        </div>
        
        
    )
}

export default Footer
