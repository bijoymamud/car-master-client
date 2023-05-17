
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-20">
            <div>
                <figure className="px-10 pt-10">
                    <img src={img} alt="images" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-start text-2xl">{title}</h2>

                    <div className="card-actions">
                        <p className="font-bold text-red-600"> ${price}</p>
                        <Link to={`/book/${_id}`}><FaArrowRight></FaArrowRight></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;