import mongoose from "mongoose";

const dbConnection = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}/hospital`)
        .then(() => console.log('db connected'))
        .catch(err => console.log('database error' , err))
};



export { dbConnection };
