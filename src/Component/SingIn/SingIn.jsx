import React, { useContext, useState } from 'react';
import { AuthContest } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SingIn = () => {

    const [error,seterror]=useState('')
    const { user, createUser } = useContext(AuthContest);

    console.log(user)

    const handelSingIn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        seterror('');
        if(password.length<6){
            seterror('please inter atlest 6 careacter password')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                seterror(error.message)
            })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Pls Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelSingIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/loging" className="label-text-alt link link-hover text-red-300">Have a account? Click hare</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-slate-400 text-xl">Register</button>
                            </div>
                            <p className='text-red-500'>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingIn;