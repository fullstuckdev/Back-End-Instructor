import mongoose from "mongoose";

const Developer = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tools: {
        type: String, 
        required: true
    },
    portofolio: {
        type: String,
        required: true
    }
})

export default mongoose.model("Developer", Developer)