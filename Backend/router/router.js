const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const apiRouter = require("./api");
const loginRouter = require("./login");
const registerRouter = require("./register");
const indexRouter = require("./index");

router.use("/public", (req, res) => {
  let p = path.join(__dirname, "../public", req.path);
  if (fs.existsSync(p)) {
    if (fs.lstatSync(p).isFile()) {
      try {
        res.sendFile(p);
      } catch {
        res.status(500).send("Internal Error");
      }
    } else {
      res.status(403).send("Not Allowed");
    }
  } else {
    res.status(404).send("Not Found");
  }
});

router.use("/api", apiRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/index", indexRouter);

module.exports = router;
