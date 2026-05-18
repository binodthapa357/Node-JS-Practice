// const fs = require("fs");
import fs from "fs";
// const { sum } = require("./utils.js");
import greet, { square, sum } from "./utils.js";

console.log("start");

const name = "Bikash";
console.log(name);
fs.readFile("data.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
const result = sum(5, 5);
console.log(result);
console.log("end");
const greeting = greet();
console.log(square(6));
console.log(greeting);
