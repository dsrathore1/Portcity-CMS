"use client"

import { Barlow } from "next/font/google";
import NetflixClone from "@/public/Assets/Netflix-Clone.webp";
import Box from "../Components/Box";
import { useEffect, useState } from "react";

const br = Barlow({
    weight: ["100", "200", "300"],
    subsets: ["latin"],
    style: ["italic", "normal"]
});

export default function AllProjects() {
    const [topProjects, setTopProjects] = useState([]);
    const [moreProjects, setMoreProjects] = useState([]);

    async function getTopProjects() {
        await fetch("http://localhost:3001/topProjects", {
            method: 'GET'
        })
            .then((data) => data.json())
            .then((res) => {
                // console.log(res.data);
                setTopProjects(res.data);
            });
    }

    async function getMoreProjects() {
        return await fetch("http://localhost:3001/moreProjects", {
            method: 'GET'
        })
            .then((data) => data.json())
            .then((res) => {
                // console.log(res.data);
                setMoreProjects(res.data);
            });
    }

    useEffect(() => {
        getTopProjects();
        getMoreProjects();
    }, []);

    return (
        <>

            <div className="ml-[16rem] text-gray-300">
                <div className="p-5">
                    <h1 className={`${br.className} font-thin text-4xl uppercase`}>Top Projects 🏡</h1>
                    <div className="mt-6 flex flex-wrap gap-20 justify-center items-center">
                        {
                            topProjects.map((data) => {
                                const tech = data.usedTech;
                                const techs = tech.join(', ');
                                return (
                                    <Box key={data._id} image_name={NetflixClone} project_name={data.projectName} project_techs={techs} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="p-5">
                    <h1 className={`${br.className} font-thin text-4xl uppercase`}>More Projects 🌳</h1>
                    <div className="mt-6 flex flex-wrap gap-20 justify-center items-center">
                        {
                            moreProjects.map((data, index) => {
                                const tech = data.usedTech;
                                const techs = tech.join(", ");
                                return (
                                    <>
                                        <Box key={index} image_name={NetflixClone} project_name={data.projectName} project_techs={techs} />
                                    </>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    );
}