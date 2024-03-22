import mongoose from "mongoose";
import validator from "validator";



const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "first Name is required"],
    },

    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name is required"],
    },


    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "please provide a  valid email"],
    },

    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must containe 11 digit"],
        maxLength: [10, "Phone Number must containe 11 digit"],
    },

    message: {
        type: String,
        required: true,
        minLength: [10, "message contains at least 10 characters or more"]
    }
}, { timestamps: true });


export const Message = mongoose.model('Message', messageSchema);

