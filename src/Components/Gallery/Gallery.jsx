import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Gallery.css';
import gallery_01 from '../../assets/gallery-1.png';
import gallery_02 from '../../assets/gallery-2.png';
import gallery_03 from '../../assets/gallery-3.png';
import gallery_04 from '../../assets/gallery-4.png';
import filmIcon from '../../assets/film-icon.svg';

const Gallery = () => {
    const swiperRef = useRef(null);
    const [isRotating, setIsRotating] = useState(false);

    const handleNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }

        // Ativa a rotação do botão
        setIsRotating(true);

        // Remove a classe após a animação
        setTimeout(() => setIsRotating(false), 500); // Duração da animação no CSS
    };

    return (
        <div className="gallery-box">

            <div className='gallery-box-img'>
                <Swiper
                    spaceBetween={-100}
                    slidesPerView={3.3}
                    loop={false}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    <SwiperSlide>
                        <img src={gallery_01} alt="Gallery 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery_02} alt="Gallery 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery_03} alt="Gallery 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallery_04} alt="Gallery 4" />
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Botão com o ícone rotativo */}
            <button className="btn3" onClick={handleNextSlide}>
                <img
                    src={filmIcon}
                    alt="Explorar mais"
                    className={`film-icon ${isRotating ? 'rotate' : ''}`}
                />
            </button>
        </div>
    );
};

export default Gallery;