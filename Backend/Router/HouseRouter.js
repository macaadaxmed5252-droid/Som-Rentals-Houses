const express = require("express");

const router = express.Router();

const HouseController = require("../Controller/UserController");
const upload = require("../Middleware/uploadimage");

router.post("/", upload.single("image"), HouseController.createHouse);

router.get("/", HouseController.ReadAllHouses);

router.put("/:id", upload.single("image"), HouseController.updateUser);

router.delete("/:id", HouseController.deleteUser);

module.exports = router;