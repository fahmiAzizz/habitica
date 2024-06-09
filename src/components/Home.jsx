import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg-2.jpg'
import { CgProfile } from "react-icons/cg";
import { RiMenu2Line } from "react-icons/ri";

const Home = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className=''>
            {/* <img className='absolute -z-10 h-screen w-full' src={bg} alt="" /> */}
            <div className='hidden md:grid w-full gap-5  grid-cols-3 items-center p-5 bg-black bg-opacity-50 justify-items-center'>
                <div className='justify-self-start ml-10'>
                    <p className='text-4xl font-bold text-white'>Habitica</p>
                </div>
                <div className=' text-white font-semibold flex flex-row  justify-items-center justify-center gap-20 p-5 '>
                    <Link to={"/Dashboard"}>Dashboard</Link>
                    <Link to={"/Profile"}>Profile</Link>
                    <Link href="">Data</Link>
                    <Link to={"/Habits"} href="">Habit</Link >
                </div>
                <div className='text-white justify-self-end pr-10'>
                    <CgProfile size={50} />
                </div>
            </div>

            <div className=' bg-opacity-50 md:hidden text-white'>

                {!menuOpen && (
                    <div className='flex flex-col p-5 md:hidden text-white bg-black bg-opacity-50 w-full'>
                        <div>
                            <button onClick={toggleMenu}><RiMenu2Line size={30} /></button>
                        </div>
                    </div>
                )}
                <div className='text-3xl absolute  top-3 right-3 '>
                    Habitica
                </div>
                {menuOpen && (
                    <div className='text-white bg-slate-800 bg-opacity-50 h-screen w-1/2 p-5'>
                        <div className='flex flex-col justify-center items-center justify-items-center '>
                            <CgProfile size={100} />
                            <p className='text-3xl '>Fahmi Aziz</p>
                            <p className='text-xl'>See Profile</p>
                        </div>
                        <div className='text-white text-2xl font-semibold flex flex-col justify-items-center justify-center py-5 gap-3'>
                            <Link to={"/Dashboard"} onClick={closeMenu}>Dashboard</Link>
                            <Link to={"/Profile"} onClick={closeMenu}>Profile</Link>
                            <Link to={""} onClick={closeMenu}>Data</Link>
                            <Link to={"/Habits"} onClick={closeMenu}>Habit</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home