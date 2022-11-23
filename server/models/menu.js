import mongoose from "mongoose";
const Schema = mongoose.Schema;

const menuShema = new Schema({
    dishname: {
        type: String,
        required : true
    },
    category: {
        type: String,
        required : true
    },
    allergy: {
        type: String,
        required : true
    }

}, {timestamps: true})

export default mongoose.model('Menu', menuShema);