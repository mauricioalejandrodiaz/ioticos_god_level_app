const express = require ('express');
const router = express.Router();

router.get("/testing", (req, res)=>{
    console.log("Bye");
    res.send("Hello from API");
});
module.exports = router;