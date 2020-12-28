import React from 'react'
import './Offer.css'

function Offer(props) {
    return (
        <div className='Offer'>
            <div className='Offer-title'>
                <h2>{props.title}</h2>
            </div>
            <div className='Offer-image'>
                <img src={props.image} alt='offers' />
            </div>
            <div className='Offer-link'>
                <a href={props.link}>{props.suggestion}</a>
            </div>
        </div>
    )
}

export default Offer
