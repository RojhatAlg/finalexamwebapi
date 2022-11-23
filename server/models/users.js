import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const Schema = mongoose.Schema;

const userShema = new Schema({
     email: {
          type: String,
          required : true,
          unique: true
     },
     password: {
          type: String,
          required : true
     },
     telephone: {
          type: Number,
          required : ['pleas enter your phone']
     }
     
}, {timestamps: true})

export default mongoose.model('User', userShema);