const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// ******************************
// ******     MODELS    *********
// ******************************
import User from "../models/user.js";

//REGISTRO
router.post('/register', async (req, res) => {

    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const newUser = {
            name: name,
            email: email,
            password: encryptedPassword

        }
        const user = await User.create(newUser);
        const toSend = {
            status: "success",
        }
        res.status(200).json(toSend);

    } catch (error) {
        console.log(error);
        console.log("ERROR - API - Register");
        const toSend = {
            status: "error",
            error: error
        };
        res.status(500).json(toSend);
    }

});

//LOGIN
router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email: email });
        if (!user) {
            const toSend = {
                status: "error",
                error: "Credenciales invalidas!"
            };
            return res.status(401).json(toSend);
        };

        if (bcrypt.compareSync(password, user.password)) {
            user.set('password', undefined, { strict: false });
            const toker = jwt.sign({ userData: user }, 'securePasswordHere', { expiresIn: 60 * 60 * 24 * 30 });
            const toSend = {
                status: "Success",
                toker: toker,
                userData: user
            };
            return res.status(200).json(toSend);
        } else {
            const toSend = {
                status: "error",
                error: "Credenciales invalidas!"
            }
            return res.status(401).json(toSend);
        }


    } catch (error) {
        console.log(error);
        console.log("ERROR - API - Login");
        const toSend = {
            status: "error",
            error: error
        };
        res.status(500).json(toSend);
    };
});

//PRUEBA
router.get("/new-user", async (req, res) => {

    try {
        const user = await User.create({
            name: "Benjamin",
            email: "b@a.com",
            password: "121212"
        });
        res.json({ "status": "success" });
    } catch (error) {
        console.log(error);
        res.json({ "status": "fail" });
    }




});

module.exports = router;
