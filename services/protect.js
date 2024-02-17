const jwt=require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const Admin=require('../models/Admin')

exports.protect = asyncHandler(async (req, res, next) => {
    // 1) Check if token exist, if exist get
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('library')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        res.status(401).send("you are not logged")
    }

    // 2) Verify token (no change happens, expired token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // 3) Check if admin exists
    const currentAdmin = await Admin.findById(decoded.adminId);
    if (!currentAdmin) {
        res.status(401).send("you are not logged")
    }
    req.admin = currentAdmin;
    next();
});