const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

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
  const sql = "SELECT * from todo";
  client.query(sql, (err, result) => {
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
// app.post("/api", (req, res) => {
//   const client = new Client(clientCofig);
//   client.connect();
//   client.query(
//     "INSERT INTO todo (id, text, checked) VALUES(?,?,?)",
//     (err, result) => {
//       client.end();
//       if (err) {
//         res.send(err);
//         throw err;
//       }
//     }
//   );
// });
app.post("/api", (req, res) => {
  const client = new Client(clientCofig);
  client.connect();
  const sql =
    "INSERT INTO todo (id, text, checked) VALUES($1,$2,$3) RETURNING *";
  const values = [req.body.id, req.body.text, req.body.checked];
  client.query(sql, values, (err, result) => {
    client.end();
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(result.rows[0]);
    }
  });
});

app.delete("/api", (req, res) => {
  // const client = new Client(clientCofig);
  // client.connect();
  console.log(req);
});

const port = 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));

// client.end();
