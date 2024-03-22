import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
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

    password: {
        type: String,
        required: true,
        minLength: [10, "password contains at least 8 characters or more"]
    },

    gender: {
        type: String,
        required: [true, "Gender is required"],

    },

    dob: {
        type: Date,
        required: [true, "DOB Is Required!"],
      },

    role: {
        type: String,
        required: [true, "User role is required"],
        enum: ["Admin", 'Patient', 'Doctor']
    },

    doctorDepartment: {
        type: String,
    },

    docAvtar: {
        public_id: String,
        url: String

    }


}, { timestamps: true });


userSchema.pre('save', async function () {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.comparePassword = async (enterPassword) => {
    return await bcrypt.compare(enterPassword, this.password);

}

userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    })
}




export const User = mongoose.model('User', userSchema);

