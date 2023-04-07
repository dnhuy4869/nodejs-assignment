const User = require("../models/user");

const register = async (req, res) => {
    try {
        const cate = await User.findOne({ username: req.body.username });
        if (cate) {
            return res.status(403).json({
                message: "Username is already exist",
            })
        }

        const newCate = await new User(req.body);
        await newCate.save();

        return res.status(200).json({
            message: "Registered successfully",
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const login = async (req, res) => {
    try {
        const cate = await User.findOne({ 
            username: req.body.username,
            password: req.body.password,
        });

        if (!cate) {
            return res.status(403).json({
                message: "Username or password is not correct",
            })
        }

        return res.status(200).json(cate);
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

module.exports = {
    register,
    login,
}