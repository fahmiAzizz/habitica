import React from 'react'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'

const Intro = () => {

    return (
        <div className=' bg-cover bg-meditation absolute w-full top-0 z-50 h-screen  text-white'>
            <div>
                <div className='h-screen max-w-screen-lg justify-center mx-auto my-auto text-center flex flex-col'>
                    <p className='text-4xl font-semibold pb-2'>HABITI<span className='text-green-600'>CATION</span></p>
                    <p className='text-5xl font-semibold'>Makes it easier for us to control, create new habits and delete bad ones</p>
                    <p className='text-2xl p-2'>A lot habit that you can make like
                        <span className='font-semibold text-green-600 '> <ReactTyped
                            strings={[
                                " Workout",
                                " Reading",
                                " Journaling",
                                " Running"
                            ]}
                            typeSpeed={90}
                            backSpeed={70}
                            loop>
                        </ReactTyped></span>
                    </p>
                    <Link to="/Dashboard" className=' hover:scale-110 duration-300 hover:shadow-green-700 hover:shadow-sm text-xl p-2 border border-slate-800 rounded-3xl w-24 text-center justify-items-center mx-auto bg-gradient-to-br from-sky-800 to-black '>Try It !</Link>
                </div>
            </div>
        </div >
    )
}

export default Intro