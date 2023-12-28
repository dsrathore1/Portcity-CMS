import tpModel from "../DB/Model/topProjects.js";

//! Get all the data from the Top Project Collection
export const getAllTopProjects = async (req, res) => {
    const getData = await tpModel.find({});
    res.status(200).json({
        message: "Your all data",
        data: getData
    });
};

//! Get specific data, from collection
export const getOneData = async (req, res) => {
    //? Find by id
    const { id } = req.params;
    const getData = await tpModel.findOne({ _id: id });
    res.json({
        data: getData
    });

    //? Find by name with no case sensitiveness
    // let regex = new RegExp("^PoRtcity$", 'i');
    // const getData2 = await tpModel.find({ projectName: regex });

    //? Find all similar data to given value, inside an array. Which result provide data those are exact match of provided value.
    // const getData3 = await tpModel.find({ usedTech: { $all: ['Docker'] } });
    // res.json(getData3);
}

//! Create Document and push it to the DB.
export const addProject = async (req, res) => {

    const data = req.body;
    const postData = await tpModel(data);
    try {
        console.log(postData);
        await postData.save();

        res.status(200).json({
            message: "Your data is Successfully added to the database.",
            data: postData
        });

    } catch (error) {
        console.log(error);
    }
}

//! Update Project Name
export const updateProject = async (req, res) => {
    const { _id } = req.params;
    const { gitHubLink } = req.body;

    const updatedProject = await tpModel.findOneAndUpdate(_id, {
        gitHubLink: gitHubLink,
    });

    res.status(200).json({
        message: "Your data is updated successfully",
        updatedData: updatedProject
    });
}

//! Delete all the data, present into Collection
export const deleteAllProjects = async (req, res) => {
    await tpModel.deleteMany({});
    res.status(201).json({
        message: "Your database is successfully get empty",
    });
};

//! Delete specific data 
export const deleteOne = async (req, res) => {
    const { id } = req.params;
    await tpModel.deleteOne({ _id: id });
    res.send("Deleted Successfully");
}