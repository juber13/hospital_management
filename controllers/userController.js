import { User } from "../models/user.model.js";

const register = async (req, res, next) => {
    const { firstName, lastName, email, phone, password, dob, gender, role } = req.body;

    if(!firstName || !lastName || !email || !phone || !password || !dob || !gender  || !role){
        return res.status(404).json({
            success : false,
            message : "something went wrong",
        })
    }

    let user = await User.findOne({email});


    if(user){
        return res.json({
            success : false,
            message : "user Already registerd please login"
        })
    }

    user = await User.create(req.body);
    return res.status(201).json({
        success : true,
        message : "User registerd succesfully"
    })

}

export default register;