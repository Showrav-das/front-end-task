import React from 'react';
import './navbar.css';
import img from '../../images/Ellipse 1.png'

const Navbar = () => {
    return (
        <div className="container navbar-set h-[64px] items-center mx-auto mobile-res">
            <div className='flex justify-between'>
                <div>
                    <h2 className='pr-4'>Starbuks <i className="fas fa-caret-down"></i></h2>
                </div>
                <div>
                    <form className='mobile-none'>
                        <div className=" relative text-[#88898E]">
                            <span className=" bg-[#F2F2F3] rounded-[8px] absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg fill="none" stroke="currentColor" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </span>
                            <input type="search" className="bg-[#F2F2F3] py-2  text-sm text-black pl-10 rounded-[8px] focus:outline-none input-width" placeholder="Search" autocomplete="off" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex place-items-center'>
                <i className="fa fa-bell-o p-1"></i>
                <span className='m-2'> <img src={img} alt="" /></span>
                <span>John Doe <i class="fas fa-caret-down"></i></span>
            </div>

        </div>
    );
};

export default Navbar;