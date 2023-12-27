"use client"

import React from 'react'
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai"
import { HiPencil } from "react-icons/hi"

const Box = ({ image_name, project_name, project_techs, id }) => {
    return (
        <>
            <div className='bg-[#ebebeb] h-[22rem] w-[20rem] rounded-xl relative'>
                <Image className='rounded-tl-lg rounded-tr-lg h-52' src={image_name} height={200} width={400} alt='topProject-imgs' priority={true} />
                <div className='px-10 my-4'>
                    <p className='text-black font-semibold capitalize'>{project_name}</p>
                    <p className='text-gray-600 text-sm'>{project_techs}</p>
                    <div className='icons absolute bottom-3 right-5 flex gap-5'>
                        <button onClick={() => { window.alert("You clicked edit button") }}>
                            <HiPencil className='text-gray-600 text-2xl cursor-pointer active:translate-y-1 transition-all ease-in-out duration-500 drop-shadow-xl' />
                        </button>
                        <button onClick={() => { window.alert(id) }}>
                            <AiFillDelete className='text-red-500 text-2xl cursor-pointer active:translate-y-1 transition-all ease-in-out duration-500 drop-shadow-xl' />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Box;