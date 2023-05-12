import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen  ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 h-[400px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute border-8 border-white right-5 top-1/2 h-[300px]" />
                </div>
                <div className='lg:w-1/2 space-y-7 ml-20'>
                    <h3 className='text-2xl font-bold text-[#FF3811]'>About Us</h3>
                    <div className='w-2/3'>
                        <h1 className="text-5xl font-bold text-white ">We are qualified & of experience in this field</h1>
                    </div>
                    <div className='w-3/4'>
                        <p className="mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p> <br />

                        <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    </div>
                    <button className="btn btn-wide bg-red-600 text-white mt-5 border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;