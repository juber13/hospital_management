import express from "express";

import { Message } from "../models/message.models.js";

const sendMessage = async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !phone || !message) {
        return res.json({
            success: false,
            message: "Something went wrong"
        });
    }

    const createdMessage = await Message.create(req.body);

    res.status(200).json({
        success: true,
        message: "message create",
        result: createdMessage
    })


}

export default sendMessage