const express = require("express");
const app = express();

app.get("/", (req,res) =>
  res.json({message: "Hello from Node.js!"})
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Nodde Listening on localhost:${port}`))