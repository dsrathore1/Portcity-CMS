import mongoose from "mongoose";

const TpSchema = await mongoose.Schema(
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

const tpModel = mongoose.models.topProjects || new mongoose.model("topProject", TpSchema);

export default tpModel;