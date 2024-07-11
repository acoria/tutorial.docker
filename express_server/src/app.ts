import express from "express";

const PORT = 5000;
const server = express();
server.get("/", (_, res) => {
  res.status(200).send("Welcome!");
});

server.listen(PORT, () => console.log("Server listening to port " + PORT));