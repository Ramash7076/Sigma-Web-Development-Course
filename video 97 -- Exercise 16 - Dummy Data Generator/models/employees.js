import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
})

export const employees = mongoose.model("employees", empSchema)