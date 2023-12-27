import { useEffect, useState } from "react";
import NetflixClone from "@/public/Assets/Netflix-Clone.webp";
import Box from "../Components/Box";
import { Barlow } from "next/font/google";

const br = Barlow({
    weight: ["100", "200", "300"],
    subsets: ["latin"],
    style: ["italic", "normal"]
});

export default function ViewMP() {
    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch("http://localhost:3001/moreProjects", {
            method: 'GET'
        })
            .then((data) => data.json())
            .then((res) => {
                setData(res.data)
            });
    }

    const deleteData = async () => {
        const id =
            await fetch("http://localhost:3001/deleteOne/")
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="p-5">
                <h1 className={`${br.className} font-thin text-4xl uppercase`}>More Projects 🌳</h1>
                <div className="mt-6 flex flex-wrap gap-20 justify-center items-center">
                    {
                        data.map((data, index) => {
                            const id = data._id;
                            const tech = data.usedTech;
                            const techs = tech.join(", ");
                            return (
                                <>
                                    <Box key={index} id={id} image_name={NetflixClone} project_name={data.projectName} project_techs={techs} />
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}