import path from "path";

import url from "url";

const filePath = "folder1/folder2/folder3/data.txt";

console.log(path.basename(filePath)); //file name
console.log(path.extname(filePath)); //extension name
console.log(path.dirname(filePath)); // folder name

const ___filename = url.fileURLToPath(import.meta.url);
const ___dirname = path.dirname(___filename)
console.log(___filename);
console.log(___dirname);


