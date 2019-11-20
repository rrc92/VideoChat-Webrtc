var express = require("express");
var app = express();

var PORT = process.env.PORT || 3005;



app.use(express.static("public"));


// set the app up with bodyparser
// app.use(bodyParser());
// Database configuration
// var databaseUrl = process.env.MONGODB_URI || "books_db";
// var collections = ["books"];
// Hook mongojs config to db variable
// var db = mongojs(databaseUrl , collections);
// Log any mongojs errors to console
// db.on("error", function(error) {
//  console.log("Database Error:", error);
// });