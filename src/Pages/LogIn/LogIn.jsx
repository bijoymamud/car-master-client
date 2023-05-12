import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const LogIn = () => {


    const handleLogin = event => {
        event.preventDefault();
      
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2 mr-20">
                        <img src={img} alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>


                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"
                                        name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" name="login" value="Login" id="" />
                                </div>
                            </form>
                            <p className="text-center mt-2">New to Car Doctors? <Link className="text-orange-600 font-bold ml-1" to="/signup">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;