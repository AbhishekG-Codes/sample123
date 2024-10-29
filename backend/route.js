const express = require("express");
const router = express.Router();
const {signup,signin} = require("./controllers")

router.get("/signup",signup)
router.post("/",signin)

module.exports = router