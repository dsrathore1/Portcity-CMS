import mpProjects from "../DB/Model/moreProjects.js";


//! Get all the More Projects at once.
export const getAllMoreProjects = async (req, res) => {
    const getData = await mpProjects.find({});
    try {
        res.status(200).json({
            message: "Your all data",
            data: getData
        });
    } catch (error) {
        if (error) throw error;
    }
}

//! Get one project's detail at a time.
export const getOneMp = async (req, res) => {
    const { id } = req.params;
    const getData = await mpProjects.findOne({ _id: id });

    try {
        res.status(200).json({
            message: "You requested for project details, they are provided below",
            data: getData
        });
    } catch (error) {
        if (error) throw error;
    }
}


//! Add one project into the library.
export const addMoreProject = async (req, res) => {
    const data = req.body;
    const postData = await mpProjects(data);

    try {
        const saveData = await postData.save();
        res.status(200).json({
            message: "Your project is add to the database successfully.",
            data: saveData
        });
    } catch (error) {
        if (error) throw error;
    }
}

//! Update More project collection
export const updateOne = async (req, res) => {
    const { id } = req.params;
    const { gitHubLink, projectName, usedTech } = req.body;
    const updatedProject = await mpProjects.findOneAndUpdate({ _id: id }, {
        projectName: projectName,
        useTech: usedTech,
        gitHubLink: gitHubLink
    });

    try {
        res.status(200).json({
            message: "Your data is updated successfully",
            updatedData: updatedProject
        });
    } catch (error) {
        if (error) throw error;
    }
}


//! Delete all more projects controller function
export const deleteAllMoreProjects = async (req, res) => {
    await mpProjects.deleteMany({});
    try {
        res.status(200).send("All data deleted Successfully from the database");
    } catch (error) {
        if (error) throw error;
    }
}
