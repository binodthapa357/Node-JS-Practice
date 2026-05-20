const Codeiturl =
  "https://codeit.com.np/web-development/react-with-next-js?duration=3months";
const urlObject = new URL(Codeiturl);
console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);

const params = new URLSearchParams(urlObject.search);
params.set("time", "8pm");
console.log(params);
