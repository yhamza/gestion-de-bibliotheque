const Admin=require('../models/Admin')
const jwt=require('jsonwebtoken');
const asyncHandler = require('express-async-handler')


exports.login = asyncHandler(async (req, res) => {
    // 1) check if password and email in the body (validation)
    // 2) check if user exist & check if password is correct

    const admin = await Admin.findOne({ email: req.body.email , password: req.body.password });

    if (!admin ) {
        res.send("check your email or password")
    }
    // 3) generate token
    const token = jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_TIME
    });

    // Delete password from response
    delete admin._doc.password;
    // 4) send response to client side
    res.status(200).json({ data: admin, token });
});