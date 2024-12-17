import React, { useState, useEffect } from 'react';
import './Footer.css';
import footerImg from '../../assets/logo.png'
import { Link } from 'react-scroll';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar/Navbar';



const Footer = () => {

    // State to control contents visibility
    const [visibleDropdowns, setVisibleDropdowns] = useState({});

    const [isMobile, setIsMobile] = useState(false);

    const [isCopyrightsOpen, setIsCopyrightsOpen] = useState(false);



    // Function to alter the dropdown visibility

    const toggleDropdown = (key) => {

        if (isMobile) {
            setVisibleDropdowns((prevState) => ({
                ...prevState,
                [key]: !prevState[key],
            }));
        }

    };

    const toggleCopyrights = () => {

        setIsCopyrightsOpen((prev) => !prev)
    }

    // Check if the device is mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <Navbar isPopinOpen={isCopyrightsOpen} />
            <footer role='contentinfo' className='Footer' >

                <div className='Footer_footer grid'>

                    <ul className='Footer_Links'>


                        <li className='Footer_Links_column'>
                            <div className={`Dropdown_item ${visibleDropdowns['sobre'] ? 'Dropdown_expanded' : ''}`}>

                                <p role='heading' aria-level='2' className='Footer_Links_title montserrat-14'>

                                    <button type='button' className={`Dropdown_button ${visibleDropdowns['sobre'] ? 'Dropdown_active' : ''}`}
                                        aria-expanded={visibleDropdowns['sobre']}
                                        onClick={() => toggleDropdown('sobre')}>

                                        <span className='Dropdown_title Footer_Links_title montserrat-14'>Sobre</span>
                                        <svg viewBox='0 0 24 24' width='1em' height='1em' focusable='false' aria-hidden='true' className='Dropdown_chevron SvgRWrapper patharrow'>
                                            <path d='M12.5 16.55 5 9.05 6.05 8l6.45 6.45L18.95 8 20 9.05z'></path>
                                        </svg>
                                    </button>
                                </p>

                                {(isMobile ? visibleDropdowns['sobre'] : true) && (
                                    <div className='Dropdown_content'>
                                        <div>
                                            <ul className='Dropdown_menu'>

                                                <li className='Links_List_li'>

                                                    <a className='Links_List_link' href="https://maps.app.goo.gl/dn9dPwggGnB5pSW79">O Palácio Garibaldi em Curitiba</a>
                                                </li>

                                                <li className='Links_List_li'>

                                                    <a className='Links_List_link' href="">Regras para visitantes</a>
                                                </li>
                                                <li className='Links_List_li'>

                                                    <a className='Links_List_link' href="">Doações e viés</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>)}
                            </div>

                        </li>


                        <li className='Footer_Links_column'>

                            <div className={`Dropdown_item ${visibleDropdowns['nossosite'] ? 'Dropdown_expanded' : ''}`}>

                                <p role='heading' aria-level='2' className='Footer_Links_title montserrat-14'>

                                    <button type='button' className={`Dropdown_button ${visibleDropdowns['nossosite'] ? 'Dropdown_active' : ''}`}
                                        aria-expanded={visibleDropdowns['nossosite']}
                                        onClick={() => toggleDropdown('nossosite')}>

                                        <span className='Dropdown_title Footer_Links_title montserrat-14'> Nosso Site </span>

                                        <svg viewBox='0 0 24 24' width='1em' height='1em' focusable='false' aria-hidden='true' className='Dropdown_chevron SvgRWrapper patharrow'>

                                            <path d='M12.5 16.55 5 9.05 6.05 8l6.45 6.45L18.95 8 20 9.05z'></path>
                                        </svg>

                                    </button>

                                </p>
                                {(isMobile ? visibleDropdowns['nossosite'] : true) && (
                                    <div className='Dropdown_content'>
                                        <div>
                                            <ul>

                                                <li className='Links_List_li'>

                                                    <Link to='about' offset={-80} duration={500}><a className='Links_List_link' >Nossa história</a></Link>
                                                </li>

                                                <li className='Links_List_li'>

                                                    <Link to='gallery-box' offset={-300} duration={500}><a className='Links_List_link'>Galeria</a></Link>
                                                </li>
                                                <li className='Links_List_li'>

                                                    <Link to='highlights' offset={-50}><a className='Links_List_link'>Destaques</a></Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className='Footer_Links_column'>

                            <div className={`Dropdown_item ${visibleDropdowns['contato'] ? 'Dropdown_expanded' : ''}`}>

                                <p role='heading' aria-level='2' className='Footer_Links_title montserrat-14'>

                                    <button type='button' className={`Dropdown_button ${visibleDropdowns['contato'] ? 'Dropdown_active' : ''}`}
                                        aria-expanded={visibleDropdowns['contato']}
                                        onClick={() => toggleDropdown('contato')}>

                                        <span className='Dropdown_title Footer_Links_title montserrat-14'> Contato </span>

                                        <svg viewBox='0 0 24 24' width='1em' height='1em' focusable='false' aria-hidden='true' className='Dropdown_chevron SvgRWrapper patharrow'>

                                            <path d='M12.5 16.55 5 9.05 6.05 8l6.45 6.45L18.95 8 20 9.05z'></path>
                                        </svg>

                                    </button>
                                </p>

                                {(isMobile ? visibleDropdowns['contato'] : true) && (
                                    <div className='Dropdown_content'>
                                        <div>
                                            <ul>

                                                <li className='Links_List_li'>

                                                    <a className='Links_List_link' href="">(41) 3323-3530</a>
                                                </li>

                                                <li className='Links_List_li'>

                                                    <a className='Links_List_link'
                                                        href="https://mail.google.com/mail/u/0/?hl=pt-BR">secretaria@palaciogaribaldi.com.br</a>
                                                </li>
                                                <li className='Links_List_li'>

                                                    <a className='Links_List_link' href=""> Praça Garibaldi, 12 - Alto São Francisco Curitiba-PR </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>

                    </ul>

                    <div className='Footer_right'>

                        <div className='Footer_Socials'>

                            <div className='Footer_Socials_title montserrat-14'>

                                <p role='heading' aria-level='2'>Siga-nos</p>

                                <hr>

                                </hr>
                            </div>

                            <ul className='SocialLinks_socials'>

                                <li className=''>

                                    <a className='SocialLinks_link' rel='noopener' target='_blank' href="https://www.facebook.com/palaciogaribaldi/">

                                        <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false' width='1em' height='1em' className='SvgRWrapper'>
                                            <path d='m9.78 22-.03-8.75H6V9.5h3.75V7c0-3.37 2.09-5 5.1-5 1.44 0 2.68.1 3.04.15v3.53H15.8c-1.63 0-1.95.78-1.95 1.92v1.9h4.65l-1.25 3.75h-3.4V22H9.78z'></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className=''>

                                    <a className='SocialLinks_link' rel='noopener' target='_blank' href="">

                                        <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false' width='1em' height='1em' className='SvgRWrapper'>
                                            <path d='M13.02 2c1.8 0 2.18.02 3.1.06 1.06.05 1.79.22 2.42.47.66.25 1.22.6 1.77 1.15.56.55.9 1.11 1.16 1.77.25.63.41 1.36.46 2.43.05.95.06 1.32.06 3.32v1.6c0 2-.01 2.37-.06 3.32a7.33 7.33 0 0 1-.46 2.42c-.26.66-.6 1.22-1.15 1.77-.56.56-1.12.9-1.78 1.16-.63.25-1.36.41-2.42.46-.95.05-1.33.06-3.33.06H11.2c-2 0-2.37-.01-3.33-.06a7.34 7.34 0 0 1-2.42-.46 4.91 4.91 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.16-1.78 7.35 7.35 0 0 1-.46-2.42 55.2 55.2 0 0 1-.06-3.1v-2.05c0-1.8.02-2.18.06-3.1.05-1.06.22-1.79.46-2.42.26-.66.6-1.22 1.16-1.77a4.7 4.7 0 0 1 1.77-1.15 7.35 7.35 0 0 1 2.42-.47c.92-.04 1.3-.06 3.1-.06zm.02 1.8h-2.09c-1.73 0-2.1.02-3 .06-.97.04-1.5.2-1.85.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.13.35-.3.88-.34 1.86-.04.9-.06 1.26-.06 3v2.08c0 1.74.02 2.1.06 3 .04.97.2 1.5.34 1.85.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.3 1.86.34.97.05 1.32.06 3.48.06h1.11c2.17 0 2.51-.01 3.49-.06.97-.04 1.5-.2 1.85-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.3-.88.34-1.85.05-.98.06-1.32.06-3.49v-1.1c0-2.17-.01-2.52-.06-3.5-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 0 0-.75-1.15 3.09 3.09 0 0 0-1.15-.75 5.6 5.6 0 0 0-1.85-.34 54.1 54.1 0 0 0-3-.06zM12 6.86a5.13 5.13 0 1 1 0 10.27 5.13 5.13 0 0 1 0-10.27zm0 1.8a3.33 3.33 0 1 0 0 6.67 3.33 3.33 0 0 0 0-6.67zm5.33-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z'></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className=''>

                                    <a className='SocialLinks_link' rel='noopener' target='_blank' href="">

                                        <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false' width='1em' height='1em' className='SvgRWrapper'>
                                            <path d='M10.03 15.38V8.62L15.97 12l-5.94 3.38zm13.2-8.88a2.85 2.85 0 0 0-2-2.02C19.46 4 12.35 4 12.35 4s-7.1 0-8.87.48a2.85 2.85 0 0 0-2 2.02C1 8.28 1 12 1 12s0 3.72.47 5.5a2.85 2.85 0 0 0 2.01 2.02c1.77.48 8.88.48 8.88.48s7.1 0 8.87-.48a2.85 2.85 0 0 0 2-2.02c.48-1.78.48-5.5.48-5.5s0-3.72-.47-5.5z'></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className=''>

                                    <a className='SocialLinks_link' rel='noopener' target='_blank' href="">

                                        <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false' width='1em' height='1em' className='SvgRWrapper'>
                                            <path d='M12 2a10 10 0 0 0-3.64 19.3c-.1-.79-.17-2 .03-2.87l1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.42 1.82-2.42.85 0 1.27.64 1.27 1.4 0 .86-.55 2.14-.84 3.33-.24 1 .5 1.81 1.49 1.81 1.78 0 3.14-1.87 3.14-4.57 0-2.4-1.72-4.06-4.18-4.06a4.33 4.33 0 0 0-4.52 4.33c0 .86.33 1.78.74 2.28.08.1.09.19.06.29l-.28 1.13c-.04.18-.15.23-.33.14-1.26-.59-2.04-2.4-2.04-3.88 0-3.15 2.3-6.04 6.62-6.04 3.46 0 6.17 2.46 6.17 5.77 0 3.45-2.18 6.22-5.2 6.22-1 0-1.96-.53-2.28-1.15l-.63 2.37a11 11 0 0 1-1.24 2.63A10 10 0 1 0 12 2z'></path>
                                        </svg>
                                    </a>
                                </li>
                                {/* <li className=''>

                                <a className='SocialLinks_link' rel='noopener' target='_blank' href="">

                                    <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false' width='1em' height='1em' className='SvgRWrapper'>
                                        <path d='m9.78 22-.03-8.75H6V9.5h3.75V7c0-3.37 2.09-5 5.1-5 1.44 0 2.68.1 3.04.15v3.53H15.8c-1.63 0-1.95.78-1.95 1.92v1.9h4.65l-1.25 3.75h-3.4V22H9.78z'></path>
                                    </svg>
                                </a>
                            </li>
                            <li className=''>

                                <a className='SocialLinks_link' rel='noopener' target='_blank' href="">

                                    <svg viewBox='0 0 24 24' aria-hidden='true' focusable='false' width='1em' height='1em' className='SvgRWrapper'>
                                        <path d='m9.78 22-.03-8.75H6V9.5h3.75V7c0-3.37 2.09-5 5.1-5 1.44 0 2.68.1 3.04.15v3.53H15.8c-1.63 0-1.95.78-1.95 1.92v1.9h4.65l-1.25 3.75h-3.4V22H9.78z'></path>
                                    </svg>
                                </a>
                            </li> */}
                            </ul>
                        </div>

                        {/* <div className='Footer_Member'>

                        <div className='Footer_Member_title montserrat-14'>

                            <p aria-level='2' role='heading'>Membership</p>

                            <hr>
                            
                            </hr>

                            <p>hkweisdjknxjsbdkjasbnxwekj, xh jwehxhsxusxhknuwsxnjs</p>
                        </div>
                    </div> */}
                    </div>

                    <div className='grid'>

                        <div className='Footer_BottomLinks roboto-p-12'>

                            <ul className='Footer_BottomLinks_content'>

                                <li className='Footer_BottomLinks_li'>

                                    <a className='Footer_BottomLinks_link' href="">

                                        Nota legal
                                    </a>
                                </li>
                                <li className='Footer_BottomLinks_li'>

                                    <a className='Footer_BottomLinks_link' href="">

                                        Corpus
                                    </a>
                                </li>
                                {/* <li className='Footer_BottomLinks_li'>

                                    <a  className='Footer_BottomLinks_link' href="">

                                        Cookies
                                    </a>
                                </li> */}
                                <li className='Footer_BottomLinks_li'>

                                    <a className='Footer_BottomLinks_link' href="">

                                        Créditos
                                    </a>
                                </li>
                                <li className='Footer_BottomLinks_li'>

                                    <button type='button' className='Footer_BottomLinks_link' onClick={toggleCopyrights}>
                                        Copyrights
                                    </button>

                                    {isCopyrightsOpen && (
                                        <div className={`Popin  ${isCopyrightsOpen ? 'Popin_open' : ''}`} role='dialog' aria-modal='true' aria-label='Copyrights'>

                                            <div className='Popin_mask'></div>
                                            <div role='document' className='Popin_content Popin_light'>

                                                <div className='Popin_header'>

                                                    <button type='button' onClick={toggleCopyrights}>

                                                        <svg viewBox='0 0 32 32' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper'>

                                                            <path d='M23.07 10.34 17.41 16l5.66 5.66-1.41 1.41L16 17.41l-5.66 5.66-1.41-1.41L14.59 16l-5.66-5.66 1.41-1.41L16 14.59l5.66-5.66 1.41 1.41z'></path>
                                                        </svg>

                                                        <span className='sr-only'>Fechar</span>
                                                    </button>

                                                    <p role='heading' aria-level='1' className='Popin_title'>Copyrights</p>

                                                </div>

                                                <div className='Popin_scrollable'>

                                                    <div aria-live='polite' className='sr-only'></div>

                                                    <ul className='Copyrights_Popin'>

                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 04 de julho de 2024, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-2.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 04 de agosto de 2024, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-3.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 08 de dezembro de 2023, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-4.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 26 de maio de 2024, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-5.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 11 de dezembro de 2024, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-6.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 26 de dezembro de 2022, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-7.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 04 de março de 2022, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-8.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 21 de novembro de 2020, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>
                                                        <li>

                                                            <figure role='figure' aria-label='O Palácio Garibaldi'>

                                                                <div className='Copyrights_Popin_picture'>

                                                                    <picture>

                                                                        <img src="/src/assets/garibaldi-cardicon-9.JPG" alt width='3000' height='1998' className='Image Copyrights_Popin_img' loading='lazy' decoding='async' />
                                                                    </picture>
                                                                </div>
                                                                <div className='figcaption'>

                                                                    <p className='Copyrights_Popin_title roboto-h-14'>

                                                                        Garibaldi no Palácio
                                                                    </p>

                                                                    <p className='Copyrights_Popin_copy roboto-p-12'>©Palácio Garibaldi, Curitiba, 04 de novembro de 2021, Instagram post.</p>
                                                                </div>
                                                            </figure>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </li>
                            </ul>

                            <Link to='hero' smooth='true' duration={500} offset={0} >
                                <img className='Footer_BottomLinks_img' src={footerImg} loading='lazy' decoding='async' sizes='214px' alt width='428' height='129' />
                            </Link>
                        </div>
                    </div>


                </div>

            </footer>
        </>

    )
};


export default Footer;