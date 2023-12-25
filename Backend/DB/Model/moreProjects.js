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

const mpProjects = mongoose.models.moreProjects || new mongoose.model("moreProjects", Schema);

export default mpProjects;
