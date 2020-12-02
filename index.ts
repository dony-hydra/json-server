const jsonServer = require("json-server");
const fs = require("fs");
// import * as faker from "faker";

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;

let mockup: any;

// Read file DB
fs.readFile("mockup.json", (err, data) => {
  if (err) throw err;
  mockup = JSON.parse(data);
  console.log(mockup);
  fs.writeFileSync("db.json", JSON.stringify(mockup));
});

// Set default middleware
server.use(middleware);
// server.get("/api/employees", (req, res) => {
//   res.status(200).json();
// });

server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running");
});
