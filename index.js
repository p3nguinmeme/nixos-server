const express = require("express");
const app = express();

app.get("/", (req,res) =>
  res.json({message: "Hello from Node.js!"})
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Node Listening on localhost:${port}`))