import { useEffect, useState } from "react";
import NetflixClone from "@/public/Assets/Netflix-Clone.webp";
import Box from "../Components/Box";
import { Barlow } from "next/font/google";
import { MdDelete } from "react-icons/md";

const br = Barlow({
    weight: ["100", "200", "300"],
    subsets: ["latin"],
    style: ["italic", "normal"]
});

export default function ViewTP() {
    const [data, setData] = useState([]);

    //! Fetching all the data from the backend
    const getData = async () => {
        await fetch("http://localhost:3001/topProjects", {
            method: 'GET'
        })
            .then((data) => data.json())
            .then((res) => {
                setData(res.data)
            });
    }

    //! Delete all the data of the Top Projects collection
    const deleteAllData = async () => {
        await fetch("http://localhost:3001/topProjects/deleteAll", {
            method: "DELETE"
        });
        window.location.reload();
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h1 className={`${br.className} font-thin text-4xl uppercase select-none`}>Top Projects 🏡</h1>
                    <button onClick={deleteAllData} className="transition-all ease-in-out duration-500 active:translate-y-1"><MdDelete className="text-4xl transition-all ease-in-out duration-500 cursor-default hover:text-red-600" /></button>
                </div>
                <div className="mt-6 flex flex-wrap gap-20 justify-center items-center">
                    {
                        data.map((data) => {
                            const id = data._id
                            return (
                                <Box key={data._id} id={id} image_name={NetflixClone} project_name={data.projectName} project_techs={data.usedTech} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}