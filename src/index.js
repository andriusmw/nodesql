const express = require(`express`);
const app = express();
//Carga express

//*****************************Settings
app.set(`port`, process.env.PORT || 3000);
//Si pide puerto al cargar le enviamos puerto, sino el 3000

///****************************Middlewares
//funciones que se ejecutan antes de ejecutar archios
app.use(express.json());
//carga json si se le envía

//******************************Routes
app.use(require(`./routes/employees`));

//Starting the server
app.listen(app.get(`port`), () => {
  console.log("Server on port" + app.get(`port`));
});
//Inicializa el ervidor en el puerto 3000 . rel linea 5
