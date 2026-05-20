import http from "http";
import fs from "fs";
const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  response.writeHead(200, { "content-type": "text/html" });
  switch (request.url) {
    case "/about":
      return response.end("<h1> About Page. </h1>");

    case "/contact":
      return response.end("<h1> Contact Page. </h1>");

    default:
      return response.end("<h1> Home Page </h1>");
  }

  //   response.writeHead(200, { "content-type": "application/json" });
  //   response.end("Hello World");
  //   response.end(JSON.stringify({ status: "ok" }));
  //   const htmlContent = fs.readFileSync("data/index.html", "utf-8");
  //   response.end(htmlContent);
});

server.listen(8000, () => {
  console.log("Server is running at 8000....");
});
