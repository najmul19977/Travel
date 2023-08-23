import React from 'react';
import './Gelary.css';
import img1 from '../../assets/images/coxs1.jpg';
import img2 from '../../assets/images/napal.jpg';
import img3 from '../../assets/images/rang1.jpg';
import img4 from '../../assets/images/sajek1.jpg';
import img5 from '../../assets/images/tea1.jpg';


const Gelary = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold underline m-5'>Gallery Section</h2>
            <div className='galary'>
                <div>
                    <img className='main-img' src={img1} alt="" />

                </div>
                <div className='sub-galary'>
                    <div>
                        <img className='sub-img' src={img2} alt="" />
                    </div>
                    <div>
                        <img className='sub-img'  src={img3} alt="" />
                    </div>
                    <div>
                        <img className='sub-img'  src={img4} alt="" />
                    </div>
                    <div>
                        <img className='sub-img'  src={img5} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Gelary;