const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

/************************ BÚSQUEDA DE TODO AL CARGAR ************* */

router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM employees", (err, rows, fields) => {
    //Lista todo lo que hay en la tabla employess, al llamar a esa ruta.
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

/*********************** BUSQUEDA POR ID ******************* */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  mysqlConnection.query(
    "SELECT * FROM employees WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
