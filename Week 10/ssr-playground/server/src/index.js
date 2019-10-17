import express from "express";
import renderer from "./helpers/renderer";

const server = express();

server.use(express.static("public"));

/*=== API endpoints go here ===*/

server.get("/api", (req, res) => {
  res.status(200).json({
    message: "Hello world"
  });
});

/*=== sends client endpoints to React Router routes in client/routes/Routes ===*/

server.get("*", (req, res) => {
  res.send(renderer(req));
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`\n::: Listening on port ${PORT} :::\n`);
});
