import mpProjects from "../DB/Model/moreProjects.js";

export const getMoreProjects = async (req, res) => {
    const getData = await mpProjects.find({});
    res.status(200).json({
        message: "Your all data",
        data: getData
    });
}

export const addMoreProject = async (req, res) => {
    const data = req.body;
    // const postData = await mpProjects.create({
    //     projectName: "Calculator",
    //     usedTech: [
    //         "React-Native",
    //         "Next-Auth",
    //         "MongoDB",
    //         "CI/CD Pipeline"
    //     ]
    // });

    const postData = await mpProjects(data);

    try {
        const saveData = await postData.save();
        res.json(saveData);
    } catch (error) {
        if (error) throw error;
    }
}

export const deleteAll = async (req, res) => {
    await mpProjects.deleteMany({});
    res.send("All data deleted Successfully");
}

export const updateOne = async (req, res) => {
    const _id = req.params;
    const { gitHubLink } = req.body;

    const updatedProject = await mpProjects.findOneAndUpdate({ _id: _id }, {
        gitHubLink: gitHubLink,
    });

    res.status(200).json({
        message: "Your data is updated successfully",
        updatedData: updatedProject
    });
}


export const getOneProject = async (req, res) => {
    const { id } = req.params;

    const getData = await mpProjects.findOne({ _id: id });

    res.status(200).json({
        data: getData
    });
}