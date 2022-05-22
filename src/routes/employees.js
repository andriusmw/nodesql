const express = require(`èxpress`);
const router = express.router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM employees", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
