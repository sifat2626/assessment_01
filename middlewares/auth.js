const jwt =require("jsonwebtoken");
const User =require("../models/user.js");

exports.requireSignIn = (req, res, next) => {
    try {
        const decoded = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json(err);
    }
};