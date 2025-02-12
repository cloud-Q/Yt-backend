import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs"


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET 
});

const uploadOnCloudnary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        // uplode the file on coludinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // file has been uploded
        console.log("file is uploded on cloudinary",
        response.url);
        return response;
    }catch (error){
        fs.unlinkSync(localFilePath) //Remove the locally stored temporary file as the uplode operation got failed
        return null;
    }
}


export {uploadOnCloudnary}