const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionControler = require("./controllers/SessionController");
const SpotControler = require("./controllers/SpotController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionControler.store);
routes.post("/spots", upload.single("thumbnail"), SpotControler.store);

module.exports = routes;