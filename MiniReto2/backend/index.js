// server/index.js
import mysql from "mysql";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "admin1",
  password: "12345",
  database: "retodb"
});

con.connect((error) => {
  if (error) {
    console.error("Error connecting to database: ", error);
    return;
  }
  console.log("Database connection established");
});

app.get("/", (req, res) => {
    res.json("Hello from the backend :)")
});

app.get("/albums", (req, res) => {
  con.query(`SELECT * FROM albums `, (err, result) => {
    if (err) return res.json(err);
    console.log(result);
    return res.json(result)
  });
});

app.put("/albums/:id", (req, res) => {
  const albumId = req.params.id;
  const sql = "UPDATE albums SET 'name' =  ? WHERE id = ?";
  const values = [req.body.name];
  
  con.query(sql, [values, albumId], (err, result) => {
    if (err) return res.send(err);
    return res.json(result);
  });
});

app.delete("/albums/:id", (req, res) => {
  const albumId = req.params.id;
  const sql = `DELETE FROM albums WHERE id = ? `;
  
  con.query(sql, [albumId], (err, result) => {
    if(err) return res.send(err);
    return res.json(result);
  });
});

app.post("/albums", (req, res) => {
  const sql = "INSERT INTO albums (`band`, `name`, `release_date`, `track_count`, `cover`) VALUES (?)";
  const values = [req.body.band, req.body.name, req.body.release_date, req.body.track_count, req.body.cover];

  con.query(sql, [values], (err, result) => {
    if(err) return res.json(err);
    return res.json("Album successfully added.");
  });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
    