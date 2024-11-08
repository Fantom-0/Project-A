const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

MONGOURL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to db");
    }) .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGOURL);
}

const initDB = async () => {
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("data was initialized");
};


initDB();