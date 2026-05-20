/*
 * fs: file system module of node js, used for file operations
 * like create, read, update, delete
 * synchronous: blocking operation
 * asynchronous: non-blocking operation
 */
import console, { log } from "console";
import fs from "fs";
// 1. Synchronous Method
// Read File
// const result = fs.readFileSync("data/data.txt", "utf-8");
// console.log(result);

// const image = fs.readFileSync("data/cat.avif", "base64");
// console.log(image);
// Write File

// fs.writeFileSync("data/file.txt", "This is new file.");
// fs.writeFileSync("data/data.txt", "Hello World New");

// Update File
// fs.appendFileSync("data/data.txt", " Additional Hello");
// Delete File
// fs.rmSync("data/file.txt");

//2. Async Method

//Read File
console.log("file before");

fs.readFile("data/data.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("file after");

//Write File
fs.writeFile("data/data.json", JSON.stringify({ name: "Ram" }), () => {
  console.log("File written successful");
});

//Update File
fs.appendFile("data/data.json", JSON.stringify({ age: 22 }), () => {
  console.log("File Update Successfully.");
});

//deletefile
fs.rm('data/data.json')
