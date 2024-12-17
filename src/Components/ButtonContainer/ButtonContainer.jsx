import React, { useState, useEffect } from 'react';
import './ButtonContainer.css';
import hours from '../../Components/Hours/Hours.json';




const ButtonContainer = () => {


    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDropdown = () => {

        setIsExpanded(!isExpanded);
    };

    const [showButtonContainer, setShowButtonContainer] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroElement = document.getElementById('hero');

            if (heroElement) {
                const heroBottom = heroElement.getBoundingClientRect().bottom;

                if (heroBottom < 0) {
                    setShowButtonContainer(true);
                } else {
                    setShowButtonContainer(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Função de limpeza
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [currentHours, setCurrentHours] = useState(null);

    useEffect(() => {

        const today = new Date();
        const isweekend = today.getDay() === 0 || today.getDay() === 6; // SATURDAY OR SUNDAY 
        const hoursToShow = isweekend ? hours.weekends : hours.weekdays;

        setCurrentHours(hoursToShow)

    }, []);

    //   const [garibaldiStatus, setGaribaldiStatus] = useState(null);

    //   useEffect (() => {

    //     const today = new Date();

    //   })


    return (


        <div className='StickyWrapperBottom_wrapper StickyWrapperBottom_shown'>

            <div className='StickyWrapperBottom'>

                <div>
                    <>
                        {showButtonContainer && (
                            <div className='EncartInsertVisitors_EncartInsertVisitorsDesktop'>

                                <div className='EncartInsertVisitorsDesktop_inSticky'>

                                    <div>

                                        <h2 className='EncartInsertVisitorsDesktop_inSticky_title'>Visite o Garibaldi</h2>
                                    </div>

                                    <div className='EncartInsertVisitorsDesktop_inSticky_separator EncartInsertVisitors_Separator'></div>

                                    <div className='EncartInsertVisitorsDesktop_inSticky_textsContainer'>

                                        <p className='EncartInsertVisitors_StatusText'>O Palácio está aberto hoje</p>

                                        {currentHours ? (
                                            <p className="EncartInsertVisitors_Horaires_Horaire EncartInsertVisitorsDesktop_inSticky_horaire montserrat-14">

                                                <span>{currentHours.open}</span>

                                                <svg viewBox='0 0 24 24' width='1em' focusable='false' aria-hidden='true' className='EncartInsertVisitors_Horaires_Horaire_fleche SvgRWrapper'>

                                                    <path d='M17 8v3.25H2v1.5h15V16l5.24-4z'></path>

                                                </svg>
                                                <span className='sr-only'>a</span>

                                                <span>{currentHours.close}</span>
                                            </p>) :

                                            (
                                                <p>carregando os horários</p>
                                            )}

                                        <div className='EncartInsertVisitorsDesktop_inSticky_separator EncartInsertVisitors_Separator'></div>

                                        <div className='EncartInsertVisitorsDesktop_inSticky_buttonsContainer EncartInsertVisitorsDesktop_inSticky_buttonsWording'>

                                            <a rel='noopener' target='_blank' className='Bouton EncartInsertVisitorsDesktop_inSticky_button Bouton_size-big Bouton_width-fixed Bouton_fill-full Bouton_dark Bouton_colored' href="">

                                                <span className='Bouton_content'>

                                                    <span className='Bouton_icon Bouton_left'>

                                                        <svg width='1em' height='1em' viewBox='0 0 16 16' focusable='false' aria-hidden='true' className='SvgRWrapper'>

                                                            <path d='M9.13.5a.9.9 0 0 1 1.28 0l1.17 1.18c.2.2.3.5.25.79a1.48 1.48 0 0 0 1.7 1.7c.3-.04.59.05.79.25l1.17 1.17a.9.9 0 0 1 0 1.28L6.87 15.5a.9.9 0 0 1-1.28 0L.51 10.41a.9.9 0 0 1 0-1.28zm.64.78L1.28 9.77l4.95 4.95 8.49-8.49-1.1-1.1c-.74.15-1.52-.1-2.08-.67s-.82-1.34-.7-2.14L9.77 1.28zm.53 5.13c.1-.1.25-.1.35 0l.35.35c.1.1.1.26 0 .36l-4.59 4.6a.27.27 0 0 1-.36 0l-.35-.36a.25.25 0 0 1 0-.36l4.6-4.59zm-2.24-.59c.1-.1.26-.1.35 0l.36.35c.1.1.1.26 0 .36L5 10.3c-.1.1-.26.1-.36 0l-.35-.35a.25.25 0 0 1 0-.36l3.77-3.77z'></path>
                                                        </svg>

                                                    </span>

                                                    <span className='Bouton_nobreak'>$nbsp</span>

                                                    <span className=' Bouton_label'>Agende agora</span>
                                                </span>

                                            </a>
                                            <a className='Bouton Buttons_ButtonsWording_infoButton EncartInsertVisitorsDesktop_inSticky_button Bouton_size-big Bouton_width-fixed Bouton_fill-full Bouton_dark' href="">

                                                <span className='Bouton_content'>

                                                    <span className='Bouton_icon Bouton_left'>

                                                        <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper' >

                                                            <path d='M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 .97a6.03 6.03 0 1 0 0 12.06A6.03 6.03 0 0 0 8 1.97zm0 2.14c.32 0 .58.26.58.58v4.28a.58.58 0 1 1-1.16 0V4.7c0-.32.26-.58.58-.58zm0 7.78a.78.78 0 1 0 0-1.56.78.78 0 0 0 0 1.56z'></path>

                                                        </svg>

                                                    </span>

                                                    <span className='Bouton_nobreak'>$nbsp</span>

                                                    <span className='Bouton_label'>prepare sua visita</span>
                                                </span>
                                            </a>
                                        </div>

                                        <div className='EncartInsertVisitorsDesktop_inSticky_buttonsContainer EncartInsertVisitorsDesktop_inSticky_buttonsIcon'>

                                            <div className='Buttons_ButtonsIcon'>

                                                <a rel='noopener' target='_blank' className='Buttons_ButtonsIcon_button Buttons_ButtonsIcon_billetterie EncartInsertVisitorsDesktop_inSticky_button' href="">

                                                    <span className='sr-only'>Compre um ticket</span>
                                                </a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>)}
                    </>




                    <div className='EncartInsertVisitors_EncartInsertVisitorsMobile'>

                        <div className={`EncartInsertVisitorsMobile_Dropdown_item ${isExpanded ? 'EncartInsertVisitorsMobile_Dropdown_expanded' : ''}`}>

                            <h2>

                                <button type='button' className={`EncartInsertVisitorsMobile_Dropdown_button ${isExpanded ? 'EncartInsertVisitorsMobile_Dropdown_active' : ''}`}
                                    aria-expanded={isExpanded} onClick={toggleDropdown}>

                                    <span className='EncartInsertVisitorsMobile_Dropdown_title montserrat-14'>
                                        Bem-vindo ao Garibaldi
                                    </span>
                                    <svg viewBox='0 0 24 24' width='1em' height='1em' focusable='false' aria-hidden='true'
                                        className='EncartInsertVisitorsMobile_Dropdown_chevron SvgRWrapper'>

                                        <path d='M12.5 16.55 5 9.05 6.05 8l6.45 6.45L18.95 8 20 9.05z'></path>
                                    </svg>

                                </button>
                            </h2>

                            {isExpanded && (
                                <div className={`EncartInsertVisitorsMobile_Dropdown_content ${isExpanded ? 'EncartInsertVisitorsMobile_Dropdown_active' : ''}`} aria-hidden={!isExpanded}>

                                    <div>

                                        <div className='EncartInsertVisitorsMobile_Content_content'>

                                            <div className='EncartInsertVisitorsMobile_Content_left'>

                                                <p className='EncartInsertVisitors_StatusText'>O Palácio está aberto hoje</p>

                                                {currentHours ? (
                                                    <p className='EncartInsertVisitors_Horaires_Horaire EncartInsertVisitorsMobile_Content_horaire montserrat-14'>


                                                        <span className='sr-only'>a</span>
                                                        <span>{currentHours.open}</span>

                                                        <svg viewBox='0 0 24 24' width='1em' height='1em' focusable='false' aria-hidden='true' className='EncartInsertVisitors_Horaires_Horaire_fleche SvgRWrapper_fleche_time'>

                                                            <path d='M17 8v3.25H2v1.5h15V16l5.24-4z'></path>
                                                        </svg>

                                                        <span>{currentHours.close}</span>
                                                    </p>) :
                                                    (
                                                        <p>Carregando horários</p>

                                                    )}

                                            </div>

                                            <div className='EncartInsertVisitorsMobile_Content_right'>

                                                <div className='EncartInsertVisitorsMobile_Content_buttonsContainer EncartInsertVisitorsMobile_Content_buttonsWording'>

                                                    <a target='_blank' rel='noopener' tabIndex='-1' className='Bouton EncartInsertVisitorsMobile_Content_button Bouton_size-big Bouton_width-fixed Bouton_fill-full Bouton_dark Bouton_colored'>
                                                        <span className='Bouton_content'>

                                                            <span className='Bouton_icon Bouton_left'>

                                                                <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper'>

                                                                    <path d='M9.13.5a.9.9 0 0 1 1.28 0l1.17 1.18c.2.2.3.5.25.79a1.48 1.48 0 0 0 1.7 1.7c.3-.04.59.05.79.25l1.17 1.17a.9.9 0 0 1 0 1.28L6.87 15.5a.9.9 0 0 1-1.28 0L.51 10.41a.9.9 0 0 1 0-1.28zm.64.78L1.28 9.77l4.95 4.95 8.49-8.49-1.1-1.1c-.74.15-1.52-.1-2.08-.67s-.82-1.34-.7-2.14L9.77 1.28zm.53 5.13c.1-.1.25-.1.35 0l.35.35c.1.1.1.26 0 .36l-4.59 4.6a.27.27 0 0 1-.36 0l-.35-.36a.25.25 0 0 1 0-.36l4.6-4.59zm-2.24-.59c.1-.1.26-.1.35 0l.36.35c.1.1.1.26 0 .36L5 10.3c-.1.1-.26.1-.36 0l-.35-.35a.25.25 0 0 1 0-.36l3.77-3.77z'></path>
                                                                </svg>
                                                            </span>
                                                            <span className='Bouton_nobreak'>$nbsp</span>
                                                            <span className='Bouton_label'>Agende seu horário</span>
                                                        </span>
                                                    </a>
                                                    <a className='Bouton Buttons_ButtonsWording_infoButton EncartInsertVisitorsMobile_Content_button Bouton_size-big Bouton_width-fixed Bouton_fill-full Bouton_dark'>

                                                        <span className='Bouton_content'>

                                                            <span className='Bouton_icon Bouton_left'>

                                                                <svg viewBox='0 0 16 16' width='1em' height='1em' className='SvgRWrapper' focusable='false' aria-hidden='true'>

                                                                    <path d='M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 .97a6.03 6.03 0 1 0 0 12.06A6.03 6.03 0 0 0 8 1.97zm0 2.14c.32 0 .58.26.58.58v4.28a.58.58 0 1 1-1.16 0V4.7c0-.32.26-.58.58-.58zm0 7.78a.78.78 0 1 0 0-1.56.78.78 0 0 0 0 1.56z'></path>
                                                                </svg>
                                                            </span>
                                                            <span className='Bouton_nobreak'>$nsp</span>
                                                            <span className='Bouton_label'>Prepare sua visita</span>

                                                        </span>
                                                    </a>
                                                </div>

                                                <div className='EncartInsertVisitorsMobile_Content_buttonsContainer EncartInsertVisitorsMobile_Content_buttonsIcon'>

                                                    <div className='Buttons_ButtonsIcon'>

                                                        <a href='' rel='noopener' target='_blank' href='' tabindex='-1' className='Buttons_ButtonsIcon_button Buttons_ButtonsIcon_billetterie EncartInsertVisitorsMobile_Content_button'>

                                                            <span className='sr-only'>Agende se horário</span>

                                                            <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper'>

                                                                <path d='M9.13.5a.9.9 0 0 1 1.28 0l1.17 1.18c.2.2.3.5.25.79a1.48 1.48 0 0 0 1.7 1.7c.3-.04.59.05.79.25l1.17 1.17a.9.9 0 0 1 0 1.28L6.87 15.5a.9.9 0 0 1-1.28 0L.51 10.41a.9.9 0 0 1 0-1.28zm.64.78L1.28 9.77l4.95 4.95 8.49-8.49-1.1-1.1c-.74.15-1.52-.1-2.08-.67s-.82-1.34-.7-2.14L9.77 1.28zm.53 5.13c.1-.1.25-.1.35 0l.35.35c.1.1.1.26 0 .36l-4.59 4.6a.27.27 0 0 1-.36 0l-.35-.36a.25.25 0 0 1 0-.36l4.6-4.59zm-2.24-.59c.1-.1.26-.1.35 0l.36.35c.1.1.1.26 0 .36L5 10.3c-.1.1-.26.1-.36 0l-.35-.35a.25.25 0 0 1 0-.36l3.77-3.77z'></path>
                                                            </svg>

                                                        </a>

                                                        <a href='' tabindex='-1' className='Buttons_ButtonsIcon_button Buttons_ButtonsIcon_prepareVisit EncartInsertVisitorsMobile_Content_button'>

                                                            <span className='sr-only'>Prepare sua visita</span>

                                                            <svg viewBox='0 0 20 20' className='Buttons_ButtonsIcon_infoIcon SvgRWrapper_fleche_time' width='1em' height='1em' focusable='false' aria-hidden='true'>

                                                                <path d='M18.75 10a8.75 8.75 0 1 0-17.5 0 8.75 8.75 0 0 0 17.5 0ZM2.46 10a7.54 7.54 0 1 1 15.07 0 7.54 7.54 0 0 1-15.07 0Zm8.27 4.13a.73.73 0 1 1-1.46 0V8.78a.73.73 0 1 1 1.46 0v5.35ZM10 5.14a.97.97 0 1 0 0 1.94.97.97 0 0 0 0-1.94Z'></path>

                                                            </svg>

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default ButtonContainer;
