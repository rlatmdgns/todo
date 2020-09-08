const express = require("express");
const { Client } = require("pg");

const app = express();
const api = require("./routes/index");
const cors = require("cors");

const client = new Client({
  host: "127.0.0.1",
  user: "gimseunghun",
  database: "todo",
  // password: "3076",
  port: 5432,
});

client.connect();

app.get("/", (req, res) => {
  client.query("SELECT * from todo", (err, rows) => {
    if (err) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

app.use(cors());
app.use("/api", api);

const port = 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));
