import img from '../../assets/images/napal.jpg';


const Offer = () => {
    return (
        <div>
            <h2 className='text-center underline text-3xl m-5 font-bold'>Our Offer Tour</h2>
            <div className="hero  bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Visit Nepal!</h1>

                        <p className="py-6 w-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptas id corporis laudantium, nesciunt cupiditate perferendis pariatur. Accusamus quaerat fugit blanditiis reprehenderit soluta, molestiae magnam veniam vel debitis, vero nisi.</p>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>

            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Box Office News!</h1>
                        <p className="py-6 w-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nesciunt velit quo deleniti error facere repellendus asperiores veniam corrupti mollitia, odit magni incidunt unde hic inventore voluptatem provident labore deserunt?</p>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Offer;