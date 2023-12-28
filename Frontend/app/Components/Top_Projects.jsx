"use client"

export default function Top_Projects() {

    const addData = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);

        await fetch("http://localhost:3001/topProjects", {
            method: 'POST',
            body: JSON.stringify(form_values),
            headers: {
                'Content-type': 'application/json'
            }
        });
        console.log(JSON.stringify(form_values));
    }

    return (
        <>
            <div className="h-screen w-full pl-[15rem] flex justify-center items-center">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white">Top Projects 🚀</h2>

                    <form onSubmit={addData} method="GET">
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="projectName">Project Name</label>
                                <input name="projectName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Add Technology</label>
                                <input name="usedTech" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Add GitHub Link</label>
                                <input name="gitHubLink" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Upload Project Image</label>
                                <input id="img" type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Upload 🎁</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}