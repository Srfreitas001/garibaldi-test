import React from 'react';
import './Title.css';

const Title = ({ subtitle, title }) => {

    return (


        <div className='title'>

            <p>{title} </p>
            <h1>{subtitle} </h1>


        </div>
    )
};

export default Title;