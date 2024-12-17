import React, { useRef } from "react";
import './Follow.css';
import '../Body/Body.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import BacktoTop from '../BacktoTop/BacktoTop';








const Follow = () => {
    const swiperRef = useRef(null);
    return (



        // <body>
        <main tabIndex='-1' role='main' id='main-content' className='Ecrin_white'>

            <section className='BlockContainer_DefaultLayoutContainer BlockContainer_DefaultLayoutContainer_smallerPaddingTop container black-coal'>

                <div className='SectionTitle grid SectionTitle_dark SectionTitle_black-coal'>

                    <h2 className='SectionTitle_heading'>

                        <span className='ColorSpan_span ColorSpan_dark'>No Instagram</span>

                        {/* ::after */}
                    </h2>

                </div>

                <div className='SingleColumnLayout layout SingleColumnLayout_hasLink'>

                    <div className='SingleColumnLayout_intro'>

                        <div className='Wysiwyg SingleColumnLayout_description roboto-p-18 Wysiwyg_black-coal'>

                            <p>Compartilhe suas fotos com a hashtag #palaciogaribaldi or #garibaldi</p>
                        </div>

                    </div>

                    <p className='SingleColumnLayout_cta'>

                        <a rel='noopener' target='_blank' href='https://www.instagram.com/palaciogaribaldi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='Bouton Bouton_size-big Bouton_width-fixed Bouton_fill-full Bouton_dark'>

                            <span className='Bouton_content'>

                                <span className='Bouton_icon Bouton_left'>

                                    <svg viewBox='0 0 20 20' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper' >

                                        <path d='M10.98 1.67c1.4 0 1.71.01 2.45.05.89.04 1.5.18 2.02.38a4.19 4.19 0 0 1 2.44 2.44c.2.53.35 1.14.39 2.02l.02.4v.2c.02.5.03 1.01.03 2.31v1.05c0 1.3-.01 1.82-.03 2.32v.19l-.02.4a6.1 6.1 0 0 1-.39 2.02c-.21.55-.5 1.02-.96 1.48-.46.46-.93.75-1.48.96a6.1 6.1 0 0 1-2.02.39l-.4.02h-.2c-.49.02-1 .03-2.3.03H9.46c-1.3 0-1.82-.01-2.31-.03h-.2l-.4-.02a6.1 6.1 0 0 1-2.02-.39 4.08 4.08 0 0 1-1.47-.96 4.09 4.09 0 0 1-.97-1.48 6.1 6.1 0 0 1-.38-2.02c-.04-.74-.05-1.06-.05-2.45V9.02c0-1.4.01-1.72.05-2.46a6.3 6.3 0 0 1 .38-2.02c.22-.55.5-1.01.96-1.47a4.1 4.1 0 0 1 1.48-.97 6.1 6.1 0 0 1 2.02-.38 44.6 44.6 0 0 1 2.46-.05zm-.71 1.5H9.04c-1.37 0-1.68.01-2.4.05-.82.03-1.26.17-1.56.28-.38.15-.66.33-.95.63-.3.29-.48.57-.63.95-.11.3-.25.74-.28 1.55-.04.73-.05 1.04-.05 2.4v1.93c0 1.37.01 1.67.05 2.4.03.82.17 1.26.28 1.55.15.39.34.67.63.96.29.29.57.47.95.62.3.12.74.25 1.55.29.8.03 1.1.04 2.85.05h1.03c1.76 0 2.05-.02 2.85-.05a4.57 4.57 0 0 0 1.55-.29 2.65 2.65 0 0 0 1.58-1.58c.12-.3.25-.73.29-1.55.03-.8.04-1.09.05-2.85V9.48c0-1.75-.02-2.04-.05-2.85a4.59 4.59 0 0 0-.29-1.55 2.56 2.56 0 0 0-.62-.95c-.3-.3-.57-.48-.96-.63a4.6 4.6 0 0 0-1.55-.28 34.6 34.6 0 0 0-2.4-.05H10zM10 5.72a4.28 4.28 0 1 1 0 8.56 4.28 4.28 0 0 1 0-8.56zm0 1.5a2.78 2.78 0 1 0 0 5.56 2.78 2.78 0 0 0 0-5.56zm4.44-2.67a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'>

                                        </path>
                                    </svg>

                                </span>

                                <span className='Bouton_nobreak'>$nbsp</span>

                                <span className='Bouton_label'>Siga-nos !</span>

                            </span>



                        </a>
                    </p>

                    <div className='SingleColumnLayout_content'>

                        <div className='flux'>

                            {/* Botões de navegação personalizados
                            <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                                Previous
                            </button>
                            <button onClick={() => swiperRef.current.swiper.slideNext()}>
                                Next
                            </button> */}

                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination]}
                                navigation={true} // Corrigir para habilitar o Navigation
                                pagination={{ clickable: true }} // Paginador funcional
                                spaceBetween={16}
                                slidesPerView={1}
                                breakpoints={{
                                    540: { slidesPerView: 1.3 },
                                    768: { slidesPerView: 2.3 },
                                    1024: { slidesPerView: 3.3 },
                                }}
                            >

                                <div className='CardsSlideshow CardsSlideshow_tabletMulti CardsSlideshow_desktopMulti CardsSlideshow_largeMulti CardsSlideshow_snap ' >

                                    <ul className='CardsSlideshow_track' draggable='false'>

                                        <SwiperSlide>

                                            <li tabIndex='-1'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/C8_5Iy1Cd6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click'>


                                                            <picture>

                                                                <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <img src="/src/assets/garibaldi-cardicon.JPG" alt="" className='Image CardsSlideshow_InstagramSlide_profile' />


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>04/07/2024</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                            <a target="_blank" rel="noopener" href="https://www.instagram.com/p/C8_5Iy1Cd6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon.JPG" alt='' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Hoje, celebramos o aniversário de Giuseppe Garibaldi, nostro eterno protettore. Conhecido como o herói</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <SwiperSlide>
                                            <li tabIndex='-1'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/C-PuFkexPre/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click'>


                                                            <picture>

                                                                <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <img src="/src/assets/garibaldi-cardicon.JPG" alt="" className='Image CardsSlideshow_InstagramSlide_profile' />


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>04/08/2024</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                            <a target='_blank' rel='noopener' href='https://www.instagram.com/p/C-PuFkexPre/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='><img src="/src/assets/garibaldi-cardicon-2.JPG" alt='' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Hoje, celebramos o legado de Anita Garibaldi, que há 175 anos nos deixou, mas cuja coragem e determinação continuam a nos inspirar</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <SwiperSlide>
                                            <li tabIndex='-1'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/C0lu_bxMUiv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click'>


                                                            <picture>

                                                                <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <a href=""><img src="/src/assets/garibaldi-cardicon.JPG" alt="" className='Image CardsSlideshow_InstagramSlide_profile' /></a>


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>08/12/2023</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                            <a target="_blank" rel="noopener" href="https://www.instagram.com/p/C0lu_bxMUiv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" ><img src="/src/assets/garibaldi-cardicon-3.JPG" alt='' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Hoje, na Itália, é comemorado a Assunção da Virgem Maria. Neste dia relembramos a certeza da existência do Céu</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <SwiperSlide>
                                            <li tabIndex='-1' aria-hidden='true'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/BjQd2eTh2_A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click' tabIndex='-1'>


                                                            <picture>

                                                                <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <a href="https://www.instagram.com/p/BjQd2eTh2_A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon.JPG" alt loading='lazy' decoding='async' width='817' height='817' className='Image CardsSlideshow_InstagramSlide_profile' /></a>


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>26/05/2018</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>

                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                            <a href="https://www.instagram.com/p/BjQd2eTh2_A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon-4.JPG" alt loading='lazy' decoding='async' width='2160' height='1440' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Cerimonia lindaaaaa ❤️</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <SwiperSlide>
                                            <li tabIndex='-1' aria-hidden='true'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/C5mKVuaLZsP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click' tabIndex='-1'>


                                                            <picture>

                                                                <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <img src="/src/assets/garibaldi-cardicon.JPG" alt loading='lazy' decoding='async' width='817' height='817' className='Image CardsSlideshow_InstagramSlide_profile' />


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>11/12/2019</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source media='(min-width:1200px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 1760px) 382px, calc((100vw - 136px) * 0.25 - 24px)' />
                                                            <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='calc((100vw - 64px) * 0.33 - 16px)' />
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 740px) calc(100vw - 112px), calc(100vw - 64px)' />

                                                            <a href="https://www.instagram.com/p/C5mKVuaLZsP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon-5.JPG" alt loading='lazy' decoding='async' width='2160' height='1440' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Hoje é a data para lembrarmos do aniversário do empresário e visionário Wladimir Trombini. Nosso ex-presidente coordenou a restauração do Palácio Garibaldi</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <li tabIndex='-1' aria-hidden='true'>

                                            <div className='CardsSlideshow_InstagramSlide'>

                                                <h3>

                                                    <a rel='noopener' target='_blank' href="" className='CardsSlideshow_InstagramSlide_head extended-click' tabIndex='-1'>


                                                        <picture>

                                                            <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                            <img src="/src/assets/garibaldi-cardicon.JPG" alt loading='lazy' decoding='async' width='817' height='817' className='Image CardsSlideshow_InstagramSlide_profile' />


                                                        </picture>

                                                        <span className='CardsSlideshow_InstagramSlide_mid'>

                                                            <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                        </span>

                                                        <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>Há 13 semanas</span>

                                                        <span className='sr-only'>- on Instagram</span>
                                                    </a>
                                                </h3>

                                                <div lang='fr'>

                                                    <picture>
                                                        <source media='(min-width:1200px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 1760px) 382px, calc((100vw - 136px) * 0.25 - 24px)' />
                                                        <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='calc((100vw - 64px) * 0.33 - 16px)' />
                                                        <source srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 740px) calc(100vw - 112px), calc(100vw - 64px)' />

                                                        <a target="_blank" rel="noopener" href=""></a><img src="/src/assets/garibaldi-cardicon-6.JPG" alt loading='lazy' decoding='async' width='2160' height='1440' className='CardsSlideshow_InstagramSlide_image' />

                                                    </picture>

                                                    <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                        <p></p>

                                                        <p>_</p>

                                                    </div>

                                                </div>
                                            </div>
                                        </li><SwiperSlide> {/* Unfunctional li */}
                                            <li tabIndex='-1' aria-hidden='true'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/Cmo6MU8Lgpf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click' tabIndex='-1'>


                                                            <picture>

                                                                <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <img src="/src/assets/garibaldi-cardicon.JPG" alt loading='lazy' decoding='async' width='817' height='817' className='Image CardsSlideshow_InstagramSlide_profile' />


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>26/12/2022</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source media='(min-width:1200px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 1760px) 382px, calc((100vw - 136px) * 0.25 - 24px)' />
                                                            <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='calc((100vw - 64px) * 0.33 - 16px)' />
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 740px) calc(100vw - 112px), calc(100vw - 64px)' />

                                                            <a href="https://www.instagram.com/p/Cmo6MU8Lgpf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon-6.JPG" alt loading='lazy' decoding='async' width='2160' height='1440' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Um dia lindo aqui em Curitiba, com essa vista do nosso Garibaldi!! ☀️🥰</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <SwiperSlide>
                                            <li tabIndex='-1' aria-hidden='true'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/CarswmprVwr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click' tabIndex='-1'>


                                                            <picture>

                                                                <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <img src="/src/assets/garibaldi-cardicon.JPG" alt loading='lazy' decoding='async' width='817' height='817' className='Image CardsSlideshow_InstagramSlide_profile' />


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>04/03/2022</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source media='(min-width:1200px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 1760px) 382px, calc((100vw - 136px) * 0.25 - 24px)' />
                                                            <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='calc((100vw - 64px) * 0.33 - 16px)' />
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 740px) calc(100vw - 112px), calc(100vw - 64px)' />

                                                            <a href="https://www.instagram.com/p/CarswmprVwr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon-7.JPG" alt loading='lazy' decoding='async' width='2160' height='1440' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Nesse último sábado, dia 26, o Palácio realizou a festa temática de XV + 1 da princesa Gabrielly. Uma noite linda de conto de fadas</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <SwiperSlide>
                                            <li tabIndex='-1' aria-hidden='true'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/CH2bxfaF4H5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click' tabIndex='-1'>


                                                            <picture>

                                                                <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <img src="/src/assets/garibaldi-cardicon.JPG" alt loading='lazy' decoding='async' width='817' height='817' className='Image CardsSlideshow_InstagramSlide_profile' />


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>21/11/2020</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source media='(min-width:1200px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 1760px) 382px, calc((100vw - 136px) * 0.25 - 24px)' />
                                                            <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='calc((100vw - 64px) * 0.33 - 16px)' />
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 740px) calc(100vw - 112px), calc(100vw - 64px)' />

                                                            <a href="https://www.instagram.com/p/CH2bxfaF4H5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon-8.JPG" alt loading='lazy' decoding='async' width='2160' height='1440' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>“Amar não é olhar um para o outro, é olhar juntos na mesma direção.” Antoine de Saint-Exupéry⁣⁣</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>
                                        <SwiperSlide>
                                            <li tabIndex='-1' aria-hidden='true'>

                                                <div className='CardsSlideshow_InstagramSlide'>

                                                    <h3>

                                                        <a rel='noopener' target='_blank' href="https://www.instagram.com/p/CV27KWMsju_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='CardsSlideshow_InstagramSlide_head extended-click' tabIndex='-1'>


                                                            <picture>

                                                                <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" />

                                                                <img src="/src/assets/garibaldi-cardicon.JPG" alt loading='lazy' decoding='async' width='817' height='817' className='Image CardsSlideshow_InstagramSlide_profile' />


                                                            </picture>

                                                            <span className='CardsSlideshow_InstagramSlide_mid'>

                                                                <span className='CardsSlideshow_InstagramSlide_account'>garibaldi</span>

                                                            </span>

                                                            <span className='CardsSlideshow_InstagramSlide_time roboto-p-12'>04/11/2021</span>

                                                            <span className='sr-only'>- on Instagram</span>
                                                        </a>
                                                    </h3>

                                                    <div lang='fr'>

                                                        <picture>
                                                            <source media='(min-width:1200px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 1760px) 382px, calc((100vw - 136px) * 0.25 - 24px)' />
                                                            <source media='(min-width:820px)' srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='calc((100vw - 64px) * 0.33 - 16px)' />
                                                            <source srcSet="/src/assets/garibaldi-cardicon.JPG" sizes='(min-width: 740px) calc(100vw - 112px), calc(100vw - 64px)' />

                                                            <a href="https://www.instagram.com/p/CV27KWMsju_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/src/assets/garibaldi-cardicon-9.JPG" alt loading='lazy' decoding='async' width='2160' height='1440' className='CardsSlideshow_InstagramSlide_image' /></a>

                                                        </picture>

                                                        <div className='Wysiwyg CardsSlideshow_InstagramSlide_post Wysiwyg_black-coal'>

                                                            <p>Aproveitar uma tarde ensolarada e visitar o Palácio é tudo de bom. Faça como a @mel.a.golden e não esqueça de compartilhar</p>

                                                            <p>_</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </li></SwiperSlide>

                                    </ul>
                                </div>

                                <div className='CardsSlideshow_controls'>

                                    <button className='ChevronButton ChevronButton_dark' type='button' onClick={() => swiperRef.current.swiper.slidePrev()} >


                                        <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper2'>

                                            <path d='M4.5 7.88 8.88 3.5l.87.88-3.5 3.5 3.5 3.5-.88.87z'></path>

                                        </svg>

                                        <span className='sr-only'>Prévias do Instagram do Garibaldi</span>
                                    </button>

                                    <div className='Dots Dots_dark'>

                                        <div className='Dots_dot Dots_current'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <div className='Dots_dot'></div>
                                        <p className='sr-only'>1 sur 10</p>

                                    </div>

                                    <button className='ChevronButton ChevronButton_dark' type='button' onClick={() => swiperRef.current.swiper.slideNext()} > {/*aria-disabled='true' */}

                                        <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' aria-hidden='true' className='SvgRWrapper2'>

                                            <path d='M11.5 7.88 7.12 3.5l-.87.88 3.5 3.5-3.5 3.5.88.87z'></path>

                                        </svg>
                                        <span className='sr-only'>Siga o Instagram do Garibaldi</span>
                                    </button>
                                </div>

                            </Swiper>
                        </div>
                    </div>


                </div>

            </section>

            <ButtonContainer />
            <BacktoTop />


        </main>
        // {/* </body> */}



    )

};

export default Follow;