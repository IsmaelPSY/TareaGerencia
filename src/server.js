import "dotenv/config";
import express from "express";

import {router} from "./activities/activity.routes.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.listen(8888, () => {
  console.log(`Server running on port: ${8888}`)
});
