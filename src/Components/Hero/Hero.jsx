import React, { useState, useEffect } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import hours from '../../Components/Hours/Hours.json';
import { Link } from 'react-scroll'



const Hero = () => {

    const [currentHours, setCurrentHours] = useState(null);

    useEffect(() => {

        const today = new Date();
        const isWeekend = today.getDay === 0 || today.getDay === 6;
        const hoursToShow = isWeekend ? hours.weekends : hours.weekdays;

        setCurrentHours(hoursToShow)
    }, [])

    return (

        <div id='hero' className='hero container'>



            <div className='HomeCover_encartVisitors'>

                <div className='EncartInsertVisitorsDesktop_Default'>

                    <div className='EncartInsertVisitorsDesktop_Default_left'>


                        <h2 className='EncartInsertVisitorsDesktop_Default_title'>Bem-vindo ao Palacio Garibaldi</h2>


                        <p className='EncartInsertVisitors_StatusText'>O Palácio está aberto de</p>

                        {currentHours ? (

                            <p className='EncartInsertVisitors_Horaires_Horaire EncartInsertVisitorsDesktop_Default_horaire montserrat-16'><span>{currentHours.open} </span>

                                <svg viewBox='0 0 24 24' width='1em' height='1em' focusable='false' aria-hidden='true' className='EncartInsertVisitors_Horaires_Horaire_fleche SvgRWrapper'>

                                    <path d='M17 8v3.25H2v1.5h15V16l5.24-4z'></path>
                                </svg>

                                <span>{currentHours.close}</span>

                            </p>) :

                            (<p>Carregando os horários...</p>

                            )}
                    </div>



                    <div className='EncartInsertVisitors_Separator'></div>

                    <div className='EncartInsertVisitorsDesktop_Default_right'>


                        <a href="">

                            <button className='btn'>Agende seu horário</button>
                        </a>



                        <a href="">

                            <button className='btn2'>Prepare sua visita</button>
                        </a>

                    </div>

                </div>
            </div>

            <video autoPlay loop muted playsinline class="hero-video" aria-hidden='true' tabIndex='-1'>

                <source src="/src/assets/garibaldi-video.mp4" type="video/mp4" />

            </video>


            <div className='hero-text'>


                <h1>Palácio Garibaldi</h1>
                <p>Palácio Garibaldi: um ícone histórico que combina tradição, sofisticação e momentos inesquecíveis.</p>

                <Link to='highlights' offset={-90} smooth='true' duration={500}><button className='btn2'>Explore mais +</button></Link>



            </div>



        </div>



    )
};

export default Hero;