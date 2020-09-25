const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require("cors");

const clientConfig = {
  host: "127.0.0.1",
  user: "gimseunghun",
  database: "todo",
  // password: "3076",
  port: 5432,
};

app.get("/api", (req, res) => {
  const client = new Client(clientConfig);
  client.connect();
  const sql = "SELECT * from todo ORDER by id";
  client.query(sql, (error, result) => {
    client.end();
    if (error) {
      // console.log("User info is: ", result.rows);
      res.send(error);
    }
    console.log("User info is: ", result.rows);
    res.send(result.rows);
  });
});

app.post("/api", (req, res) => {
  const client = new Client(clientConfig);
  client.connect();
  const sql = "INSERT INTO todo (text, checked) VALUES($1,$2) RETURNING *";
  const values = [req.body.text, req.body.checked];
  client.query(sql, values, (error, result) => {
    client.end();
    if (error) {
      res.send(error);
    } else {
      res.status(200).send(result.rows[0]);
    }
  });
});

app.delete("/api", (req, res) => {
  const client = new Client(clientConfig);
  client.connect();
  const sql = "DELETE FROM todo WHERE id=($1)";
  const value = [req.body.id];
  client.query(sql, value, (error, result) => {
    client.end();
    if (error) {
      res.send(error);
    } else {
      res.status(200).send(result.rows);
    }
  });
});

app.put("/api", (req, res) => {
  const client = new Client(clientConfig);
  client.connect();
  console.log(req.body);
  const sql = "UPDATE todo SET checked=($1) WHERE id=($2)";
  const values = [req.body.checked, req.body.id];
  client.query(sql, values, (error, result) => {
    client.end();
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.status(200).send(result.rows);
    }
  });
});

const port = 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));

// client.end();
