const mysql = require(`mysql`);

const mysqlConnection = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: "",
  database: "company",
});
//Objeto de configuración de conexión

mysqlConnection.connect(function (err) {
  //Cuando se conecta pueda dar error,si lo hay lo muestra
  if (err) {
    console.log(err);
    return;
  } else {
    //Sino hay error
    console.log("DB is connected");
  }
});

module.exports = mysqlConnection;
//Exporta el módulo para que pueda ser llamado y usado,
//como en Angular
