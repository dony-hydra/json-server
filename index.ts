const jsonServer = require("json-server");
// import * as faker from "faker";
const faker = require("faker");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;

// Set default middleware
server.use(middleware);

function generateEmployees() {
  var employees = [];

  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();

    employees.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }

  return { data: employees };
}

server.get("/api/employees", (req, res) => {
  res.status(200).json(generateEmployees());
});

server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running");
});
