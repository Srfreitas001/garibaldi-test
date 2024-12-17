import React from 'react';

import './Garden.css'
import garden from '../../assets/garibaldi-garden.png'

const Garden = () => {

    return (

        <div className='parallax'>

            <img src={garden} alt="garibaldi-garden" />

        </div>
    )
};

export default Garden;