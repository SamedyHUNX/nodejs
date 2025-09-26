const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const fs = require("fs");
const mongoose = require("mongoose");
const Tour = require("./../../models/tourModel");

const DB = process.env.MONGODB_DATABASE.replace(
  "<PASSWORD>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection successful!");
  });

// Read JSON file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, "utf-8"));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successfully loaded");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successfully deleted!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
