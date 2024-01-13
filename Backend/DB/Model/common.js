import mongoose from "mongoose";

const CommonSchema = mongoose.Schema(
    {
        image: String
    },
    { timestamps: true }
);

const ImageModel = mongoose.models.uploadImages || new mongoose.model("uploadImage", CommonSchema);

export default ImageModel;