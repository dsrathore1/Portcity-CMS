"use client"

import React, { useEffect, useState } from 'react'

const Extra = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState([]);

    async function getData() {
        await fetch("http://localhost:3001/moreProjects", {
            method: 'GET'
        })
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            setData(res.data);
        });
    }

    async function getDataById(id) {
        await fetch(`http://localhost:3001/moreProjects/getOneMp/${id}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data)
                setShowData(data.data);
            });
    }


    useEffect(() => {
        getData();
    }, []);



    return (
        <div className='ml-[16rem] text-gray-300'>
            {
                data && data.map((data, index) => {
                    const id = data._id;
                    return (
                        <div key={index}>
                            <button onClick={() => {
                                // console.log(id);
                                getDataById(id);
                            }} className='text-white py-3 px-7 border-2 border-white mx-4 my-5'>{data.projectName}</button>
                        </div>
                    )
                })
            }
            {
                <h1>{showData.projectName}</h1>
            }
        </div>
    )
}

export default Extra