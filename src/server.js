import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

app.post("/contact", (request, response) => {
  response.send("Contact form submitted");
});

app.get("/contact", (request, response) => {
  response.send("Contact Page");
});

app.get("/products", (req, res) => {
  res.send("Products Page");
});

app.listen(8000, () => {
  console.log("Server running....");
});
