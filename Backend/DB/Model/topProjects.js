import mongoose from "mongoose";

const Schema = await mongoose.Schema(
    {
        projectName: String,
        usedTech: Array,
        gitHubLink: String
    },
    {
        timestamps: true
    }
);

const tpModel = mongoose.models.topProjects || new mongoose.model("topProject", Schema);

export default tpModel;