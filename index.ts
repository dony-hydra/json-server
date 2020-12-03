const jsonServer = require("json-server");
const fs = require("fs");

// const generateEmployees = require("./employees.ts");
import { generateDB } from "./modal";

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.get("/generate", (req, res) => {
  // Read file DB
  fs.readFile("mockup.json", (err, data) => {
    if (err) throw err;
    let mockup = {};
    mockup = generateDB();
    //   mockup = JSON.parse(data);
    fs.writeFileSync("db.json", JSON.stringify(mockup));
  });
  res.send("Hello World!");
});

// Set default middleware
server.use(middleware);
// server.get("/api/employees", (req, res) => {
//   res.status(200).json();
// });

server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running");
  console.log(`http://localhost:${port}`);
});
