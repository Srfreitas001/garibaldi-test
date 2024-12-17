import React from 'react';
import './Preview.css';
import preview_01 from '../../assets/preview-01.png';
import preview_02 from '../../assets/preview-02.png';
import preview_03 from '../../assets/preview-03.png';
import preview_01_icon from '../../assets/preview-icon-01.png';
import preview_02_icon from '../../assets/preview-icon-02.png';
import preview_03_icon from '../../assets/preview-icon-03.png';



const Preview = () => {

    return (

        <div className='previews'>



            <div className='preview'>

                <img src={preview_01} alt="preview_01" className='preview_01' />

                <div className='caption'>
                    <img src={preview_01_icon} alt="preview-01-icon" />
                    <h4> O Palácio</h4>
                </div>

                <h3>Nossa História</h3>

                <p>Tenha acesso a obras e relíquias incríveis do Palácio</p>

            </div>

            <div className='preview'>

                <img src={preview_02} alt="preview_2" />

                <h3>Nossa História</h3>
                <p>Tenha acesso a obras e relíquias incríveis do Palácio</p>

                <div className='caption'>

                    <img src={preview_02_icon} alt="preview-02-icon" />
                    <h4>Eventos</h4>
                </div>

            </div>


            <div className='preview'>

                <img src={preview_03} alt="preview_03" />

                <h3>Nossa História</h3>
                <p>Tenha acesso a obras e relíquias incríveis do Palácio</p>

                <div className='caption'>

                    <img src={preview_03_icon} alt="preview-03-icon" />
                    <h4>Nossa História</h4>
                </div>

            </div>

        </div>
    )
};

export default Preview;