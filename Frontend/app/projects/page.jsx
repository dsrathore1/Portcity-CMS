"use client"
import ViewTP from "../Components/viewTopProjects";
import ViewMP from "../Components/viewMoreProjects";

export default function AllProjects() {
    return (
        <>
            <div className="ml-[16rem] text-gray-300">
                <ViewTP />
                <ViewMP />
            </div>
        </>
    );
}