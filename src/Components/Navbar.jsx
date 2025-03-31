import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Shopcontex } from '../Context/Contex';

const Navbar = () => {
    const navigate = useNavigate();
    const { search, setSearch, user } = useContext(Shopcontex)
    console.log(user);
    const [visible, setVisible] = useState(false);
    const [menu, setMenu] = useState('menu')
    const { getCartCount, signOutUser, setUser } = useContext(Shopcontex)
    const [showProfile, setShowFile] = useState(false);
    const [isOpen, setIsopen] = useState(false);
    const handleInput = (e) => {
        e.preventDefault();
        navigate('/collection/' + search)
        setSearch('')
    }

    return (
        <div className='flex justify-between items-center py-5 font-medium'>
            <Link to='/'><img className='lg:w-25 h-25' src={logo} alt="Logo" /></Link>
            <ul className='hidden sm:flex gap-5 text-sm '>
                <NavLink to='/' className='flex flex-col items-center gap-1' >
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1' >
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1' >
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1' >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>

            </ul>
            <div className='flex items-center gap-6'>
                <form onSubmit={handleInput}>
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search here' className='border outline-none shadow-none px-3 py-1' />
                </form>

                <div className='group relative'>
                    {
                        user ? <img onClick={() => {setShowFile(!showProfile);setIsopen(true)}} className='w-5 cursor-pointer ' src={assets.profile_icon} alt="" />
                            : <NavLink to='/login' className='flex flex-col items-center gap-1' >
                                <p>LOGIN</p>
                                <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                            </NavLink>
                    }



                    {
                        showProfile && isOpen &&<div className=' absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p onClick={() => {navigate('/my-profile');setIsopen(false)}} className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={() => {navigate('/orders');setIsopen(false)}} className='cursor-pointer hover:text-black'>Orders</p>
                                <p onClick={() => { setUser(null); signOutUser();setIsopen(false) }} className='cursor-pointer hover:text-black'>Logout</p>


                            </div>
                        </div>
                    }


                </div>
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} className='sm:hidden w-5 cursor-pointer' src={assets.menu_icon} alt="" />
            </div>
            {/* {Sidebar Menu for small screen} */}
            <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => { setMenu('HOME'), setVisible(false) }} className={menu === 'HOME' ? 'py-2  bg-black pl-6 border  cursor-pointer text-white' : 'py-2  pl-6 border  cursor-pointer'} to='/'>HOME</NavLink>
                    <NavLink onClick={() => { setMenu('COLLECTION'), setVisible(false) }} className={menu === 'COLLECTION' ? ' bg-black text-white py-2 pl-6 border-b cursor-pointer' : 'py-2  pl-6 border-b cursor-pointer'} to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => { setMenu('ABOUT'), setVisible(false) }} className={menu === 'ABOUT' ? 'bg-black  text-white border-b py-2 cursor-pointer pl-6 ' : 'py-2 pl-6 border-b cursor-pointer'} to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => { setMenu('CONTACT'), setVisible(false) }} className={menu === 'CONTACT' ? 'py-2 pl-6 border-b cursor-pointer bg-black text-white' : 'py-2 pl-6 border-b cursor-pointer'} to='/contact'>CONTACT</NavLink>
                    <NavLink onClick={() => { setMenu('LOGIN'), setVisible(false) }} className={menu === 'LOGIN' ? 'py-2 pl-6 border-b cursor-pointer bg-black text-white' : 'py-2 pl-6 border-b cursor-pointer'} to='/login'>LOGIN</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;