const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/indexApi");

router.use('./api', apiRoutes);

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

module.exports = router;