import express from "express";

const PORT = 5000;
const server = express();
server.get("/test", (_, res) => {
  res.status(200).send("Test successful");
});

server.listen(PORT, () => console.log("Server listening to port " + PORT));