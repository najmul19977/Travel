import React from 'react';
import img1 from '../../assets/images/coxs1.jpg';
import img2 from '../../assets/images/rang1.jpg';
import img3 from '../../assets/images/sajek1.jpg';
import img4 from '../../assets/images/tea1.jpg';


const Header = () => {
    return (
        <div className="carousel w-full h-[500px] relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  font-bold ">
                    <h2 className='text-center text-4xl'>Find Your Spacial Trip</h2>
                    <h4 className='text-center'>From Our Travel Website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure molestias incidunt expedita! Labore odit explicabo repudiandae ipsa. Laboriosam hic unde molestiae ducimus minus. Eius odit illum praesentium similique impedit.</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  font-bold ">
                    <h2 className='text-center text-4xl'>Find Your Spacial Trip</h2>
                    <h4 className='text-center'>From Our Travel Website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure molestias incidunt expedita! Labore odit explicabo repudiandae ipsa. Laboriosam hic unde molestiae ducimus minus. Eius odit illum praesentium similique impedit.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  font-bold ">
                    <h2 className='text-center text-4xl'>Find Your Spacial Trip</h2>
                    <h4 className='text-center'>From Our Travel Website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure molestias incidunt expedita! Labore odit explicabo repudiandae ipsa. Laboriosam hic unde molestiae ducimus minus. Eius odit illum praesentium similique impedit.</p>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold ">
                    <h2 className='text-center text-4xl'>Find Your Spacial Trip</h2>
                    <h4 className='text-center'>From Our Travel Website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure molestias incidunt expedita! Labore odit explicabo repudiandae ipsa. Laboriosam hic unde molestiae ducimus minus. Eius odit illum praesentium similique impedit.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Header;