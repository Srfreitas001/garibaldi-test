import React from 'react';
import './BacktoTop.css';
import { Link } from 'react-scroll';


const BacktoTop = () => {

    return (

        <div className='BackToTop'>
            <Link to='hero' offset={0} smooth='true' duration={500}>
                <button type='button' className='BackToTop_button'>

                    <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper' >

                        <path d='m3.7 6.7 3.8-3.8V15h1V2.9l3.8 3.8.7-.7-5-5-5 5z'></path>
                    </svg>

                    <span className='sr-only'> back to the top </span>
                </button>
            </Link>
        </div>
    )
};

export default BacktoTop;