import fs from "fs";

const fetchdata = new Promise((resolve, reject) => {
  (fs.readFile("data/data.txt", "utf-8"),
    (error, data) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(data);
      }
    });
});

fetchdata.then((data) => {
  console.log(data);
});
