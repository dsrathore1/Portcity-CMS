import React from 'react'
import { FaGithub, FaInstagram, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
    return (
        <>
            <div className='h-screen flex-col uppercase w-full dark:text-white flex justify-start pl-20 pt-5 items-center'>
                <h1 className='text-5xl font-medium cursor-default select-none'>🎀profile🎀</h1>
                <Link href="/login" className='text-blue-600 mt-2 capitalize hover:underline-offset-8 hover:underline hover:text-blue-400 transition-all ease-in-out duration-200 underline-offset-8 underline'>Log out</Link>
                <div className='w-full h-full flex justify-center items-center flex-col gap-10'>
                    <div className='h-[12rem] w-44 rounded-full mt-20 bg-white'></div>
                    <div className='flex justify-center items-center w-[60%] mt-2 gap-x-2'>
                        <div className="grid w-full">
                            <label className='pl-5 mb-2 text-lg capitalize'>Name</label>
                            <p className='bg-[#dcdcdc] text-black w-full rounded-full px-4 h-12 flex justify-start items-center text-lg font-medium'>Digpal Singh Rathore</p>
                        </div>
                        <div className="grid w-full">
                            <label className='pl-5 mb-2 text-lg font-semibold capitalize'>Username</label>
                            <p className='bg-[#dcdcdc] text-black w-full rounded-full px-4 h-12 flex justify-start items-center text-xl font-medium lowercase'>dsrathore1</p>
                        </div>
                    </div>
                    <div className='grid w-[60%] gap-y-2'>
                        <label className='px-4 text-lg text-gray-300 font-semibold capitalize'>E-Mail ID</label>
                        <p className='bg-[#dcdcdc] text-black w-full rounded-full px-4 h-12 flex justify-start items-center text-xl font-medium lowercase'>dsrathorebsw1234@gmail.com</p>
                    </div>
                    <div className='h-1/2 w-[60%] flex justify-evenly items-center'>
                        <Link href="https://github.com/dsrathore1" className='bg-[#282828] flex justify-center items-center cursor-pointer h-16 w-16 rounded-full'>
                            <FaGithub className='text-4xl hover:text-gray-500 transition-all ease-in-out duration-200' />
                        </Link>
                        <Link href="https://twitter.com/dsrathore122" className='bg-[#282828] flex justify-center items-center cursor-pointer h-16 w-16 rounded-full'>
                            <FaTwitter className='text-4xl hover:text-blue-500 transition-all ease-in-out duration-200' />
                        </Link>
                        <Link href="https://instagram.com/amblent_photographer" className='bg-[#282828] flex justify-center items-center cursor-pointer h-16 w-16 rounded-full'>
                            <FaInstagram className='text-4xl hover:text-pink-500 transition-all ease-in-out duration-200' />
                        </Link>
                        <Link href="#" className='bg-[#282828] flex justify-center items-center cursor-pointer h-16 w-16 rounded-full'>
                            <FaSnapchatGhost className='text-4xl hover:text-yellow-300 transition-all ease-in-out duration-200' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile