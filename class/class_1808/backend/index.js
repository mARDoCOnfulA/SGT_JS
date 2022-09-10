const express = require("express");
const app = express();
const fs = require("fs");
app.get("/get-allCustomer", (req, res) =>) {
    fs.readFile('AllCustomers.json', "utf8", function(err,data))
}