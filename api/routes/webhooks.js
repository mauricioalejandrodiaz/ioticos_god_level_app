const express = require("express");
const router = express.Router();
// const { checkAuth } = require("../middlewares/authentication.js");

router.post('/saver-webhook', async(req, res) =>{
    const data = req.body
    console.log(data);
    res.json("{probando:algo,otra:algo2}");
});

module.exports = router;