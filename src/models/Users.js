import mongoose from "../db/config.js"

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const usersModel = new mongoose.model("users", schema)

export default usersModel;