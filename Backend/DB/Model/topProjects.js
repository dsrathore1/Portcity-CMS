import mongoose from "mongoose";

const Schema = await mongoose.Schema(
    {
        projectName: { type: String, trim: true, required: true },
        usedTech: { type: String, trim: true, required: true },
        gitHubLink: { type: String, trim: true },
        projectPic: { type: String, trim: true }
    },
    {
        timestamps: true
    }
);

const tpModel = mongoose.models.topProjects || new mongoose.model("topProject", Schema);

export default tpModel;