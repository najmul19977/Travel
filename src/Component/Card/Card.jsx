
import img1 from '../../assets/images/coxs1.jpg';
import img2 from '../../assets/images/rang1.jpg';
import img3 from '../../assets/images/sajek1.jpg';
import img4 from '../../assets/images/tea1.jpg';


const Card = () => {
    return (
        <div className='md:flex  w-full  mx-auto justify-between items-center gap-10 h-[140px]  m-10 absolute mt-[-55px]  mb-50  my-20 py-10 '>
            <div className="card md:w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-4 duration-300 object-cover  m-5 ">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
            <div className="card md:w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-4 duration-300 object-cover  m-5 bg-cover ">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
           
            <div className="card md:w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-4 duration-300 my-5 object-cover  m-5">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>
            <div className="card md:w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-4 duration-300 my-5 object-cover  m-5">
                <figure><img src={img4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>
            
        </div>
        
    );
};

export default Card;