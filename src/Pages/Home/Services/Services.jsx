import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20 '>
            <div className='text-center space-y-7 '>
                <h4 className='text-xl text-red-600 font-bold'>Service</h4>
                <h2 className='text-3xl text-white font-bold'>Our Service Area</h2>
                <p className='w-1/2 text-center mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            </div>

            <div className="md:grid grid-cols-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="text-center">   <button className="btn btn-outline btn-wide  hover:bg-white text-white">More Services</button></div>

        </div>
    );
};

export default Services;