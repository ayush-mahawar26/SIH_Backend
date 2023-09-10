const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		mssg: "hello",
	});
});

module.exports = router;
