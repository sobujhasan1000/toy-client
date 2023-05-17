import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 mb-4">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Joyful animals</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>all toys</a></li>
                    <li><a>Blog</a></li>
                    <li><a>singup</a></li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Add Toy</a></li>
                            <li><a>MY Toys</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;