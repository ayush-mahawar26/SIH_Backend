const connectDB = require("./dbconfig/dbconfig");
const express = require("express");
const dotenv = require("dotenv").config();

console.log(process.env.PORT);

const app = express();

app.use(require("./routes/routes"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT, () => {
	console.log("Server is Rocking!! ");
});
