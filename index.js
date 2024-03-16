const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection")
const response = require("./response")
const respon = require("./responAPI")

app.use(bodyParser.json());
app.get("/", (req, res) => {
  const sql ="SELECT * FROM mahasiswa"
  db.query(sql, (error,result) => {
    // console.log(result)
    response (200,result, "data semua dari mahasiswa",res)
})

});

app.get("/hello", (req, res) => {
  const sql_serch = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}` 
  console.log('nim :',req.query.nim)
  db.query(sql_serch, (error, result) => {
    response(200, result, "data berdasarkan nim", res)
  })
});


// study express js 
app.get("/expres", (req, res) => {
  respon(200,"lalalala",res) 
});
app.get("/expres/:nim", (req, res) => {
  const nim = req.params.nim;
  // Simulasi data mahasiswa dari database
  res.send(`data berdasarkan by id :${nim}`);
});
app.post("/expres1", (req, res) => {
  res.send("berhasil login");
});
app.put("/expres2", (req, res) => {
  res.send("berhasil login");
});

app.delete("/expres3", (req, res) => {
  res.send("berhasil login");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
