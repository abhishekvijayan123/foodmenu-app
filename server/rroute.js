const express = require("express");
const router = express.Router();
const menucontroller = require("./controllers/menucontroller");

router.get("/fetchmenu", menucontroller.getMenu);
router.get("/fetchbrunch", menucontroller.getBrunch);
router.get("/fetchfood", menucontroller.getFood);
console.log("Router loaded ✅");
module.exports = router;
