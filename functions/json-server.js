// functions/json-server.js
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("../data/questions.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(9000, () => {
  console.log("JSON Server is running");
});
