import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
    // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionInstance = await mongoose.connect(`mongodb+srv://Parth:ParthYtCluster@clusteryt.rujvx.mongodb.net/?retryWrites=true&w=majority&appName=ClusterYT`);
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);// research about connection instance
    
    } catch (error) {
        console.log("MONGODB connection FAILED ", error)
        process.exit(1)
    }
}

export default connectDB