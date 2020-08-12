var express = require("express");
var cors = require("cors");
var port = process.env.PORT || 8888;

var app = express();

app.use(express.static(__dirname + "/build"));
app.use(cors());

app.get("*", function (req, res) {
	res.sendFile(__dirname + "/build/index.html");
});

app.listen(port);
console.log(`App listening on port: ${port}`);
