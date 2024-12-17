import React from 'react';
import './About.css';
import about_img from '../../assets/preview-03.png';
import play_icon from '../../assets/playicon.png';

const About = ({ setPlayState }) => {

    return (


        <div className='about'>

            <div className='about-left'>

                <img src={about_img} alt="about-img" className='about-img' />
                <img src={play_icon} alt="play-icon" className='play-icon' onClick={() => { setPlayState(true) }} />

            </div>

            <div className='about-right'>

                <h2>Onde o Passado e o Presente se encontram</h2>

                <p>O Palácio Garibaldi, localizado no coração de Curitiba, é um marco histórico que combina elegância arquitetônica com um rico legado cultural. Fundado em 1883, o edifício foi idealizado para abrigar as
                    atividades da Sociedade Garibaldi, formada por imigrantes italianos que buscavam preservar suas tradições e fortalecer laços comunitários. </p>

                <p>Com seu estilo arquitetônico eclético, o palácio é um reflexo da riqueza cultural da época, integrando elementos neoclássicos e renascentistas em sua construção. Ao longo dos anos, ele foi palco de
                    eventos sociais, celebrações e momentos decisivos na história local, consolidando-se como um símbolo de união e prosperidade.</p>

                <p>Hoje, o Palácio Garibaldi continua a ser um ponto de encontro entre passado e presente, recebendo visitantes de todo o mundo e servindo como um espaço para eventos culturais, exposições e atividades
                    que promovem a história e a arte. Uma visita ao palácio é um convite para explorar não apenas sua beleza arquitetônica, mas também as histórias que ele carrega em cada detalhe.</p>
            </div>



        </div>
    )
};

export default About;
