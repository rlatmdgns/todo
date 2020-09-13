const express = require("express");
const { Client } = require("pg");

const app = express();
// const api = require("./routes/index");
const cors = require("cors");

const clientCofig = {
  host: "127.0.0.1",
  user: "gimseunghun",
  database: "todo",
  // password: "3076",
  port: 5432,
};

app.get("/api", (req, res) => {
  const client = new Client(clientCofig);
  client.connect();
  client.query("SELECT * from todo", (err, result) => {
    client.end();
    if (err) {
      console.log("User info is: ", result.rows);
      res.send(err);
      throw err;
    }
    console.log("User info is: ", result.rows);
    res.send(result.rows);
  });
});

// app.use(cors());
// app.use("/api", api);

const port = 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));

// client.end();
