import { useEffect, useState } from "react";
import NetflixClone from "@/public/Assets/Netflix-Clone.webp";
import Box from "../Components/Box";
import { Barlow } from "next/font/google";

const br = Barlow({
    weight: ["100", "200", "300"],
    subsets: ["latin"],
    style: ["italic", "normal"]
});

export default function ViewTP() {
    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch("http://localhost:3001/topProjects", {
            method: 'GET'
        })
            .then((data) => data.json())
            .then((res) => {
                setData(res.data)
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="p-5">
                <h1 className={`${br.className} font-thin text-4xl uppercase`}>Top Projects 🏡</h1>
                <div className="mt-6 flex flex-wrap gap-20 justify-center items-center">
                    {
                        data.map((data) => {
                            const tech = data.usedTech;
                            const techs = tech.join(', ');
                            return (
                                <Box key={data._id} image_name={NetflixClone} project_name={data.projectName} project_techs={techs} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}