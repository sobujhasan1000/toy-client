import React, { useContext, useState } from 'react';
import { AuthContest } from '../../Provider/AuthProvider';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const [error,seterror]=useState('')
    const { singIn, singInwithgoogle} = useContext(AuthContest);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'

    const handelLoging = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                console.log(loggedUser)
                navigate(from,{ replace:true })
            })
            .catch(error => {
                console.log(error)
                seterror(error.message)
            })
    }

    const handlegooglesingin = () => {
        return singInwithgoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Pls Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handelLoging} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <p className='text-red-400'>{error}</p>
                    <div className="form-control mt-4">
                        <button className="btn bg-slate-400">Login</button>
                    </div>
                </form>
                <div className='btn bg-slate-500 m-4'><button onClick={handlegooglesingin} className="">Loging with goole</button></div>
                <Link to='/singin' className="label-text-alt link link-hover mb-2 text-center text-red-400"> Don't account!
                    pls register
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Login;