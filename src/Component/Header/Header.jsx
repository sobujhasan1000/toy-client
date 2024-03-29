import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContest } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContest);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className="navbar bg-[#4ad1ad] mb-4 rounded-md">
                <div className="flex-1">
                    <img className='h-8' src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-lion-4591886_122125.png" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Joyful animals</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-4 gap-4">
                        <Link className='hover:bg-green-200 p-1 rounded-md' to='/'>Home</Link>
                        <Link className='hover:bg-green-200 p-1 rounded-md' to='/alltoys'>all toys</Link>
                        <Link className='hover:bg-green-200 p-1 rounded-md' to='/blog'>Blog</Link>
                    </ul>
                    <div className="dropdown dropdown-end">
                        {user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                        
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/addtoy'><a>Add Toy</a></Link></li>
                                    <li><Link to='/mytoys'><a>MY Toys</a></Link></li>
                                    <li><button onClick={handelLogOut}>LogOut</button></li>
                                </ul>
                            </>
                            :
                            <>
                                <Link className='mx-4 hover:bg-green-200 p-1 rounded-md' to='/singin'>singUp</Link>
                                <Link className='hover:bg-green-200 p-1 rounded-md' to='/loging'>LogIn</Link>
                            </>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;