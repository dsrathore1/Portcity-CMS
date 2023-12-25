import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "UC-DB"
        }, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Your database connection is established DB:- ${connection.name}`);

    } catch (error) {
        console.log(error);
    }
}

export default connectDB;