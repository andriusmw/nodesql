const express = require("express");
const req = require("express/lib/request");
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
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

/************* AÑADIR USUARIOS ********** */

router.post("/", (rew, res) => {
  const { id, name, salary } = req.body;
  //obtener id, nombre y salario del objeto que manda el cliente
  const query = `
        SET @id = ?;
        SET @name = ?;
        SET @salary = ?;
        CALL employeeAddOrEdit(@id,@name,@salary);
        `;
  //pasa parámetros a la base de datos
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: "Emplead@ guardado" });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
