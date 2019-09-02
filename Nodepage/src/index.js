const express = require("express");
const app = express();
const path = require('path'); //obtener ruta de archivos 

//settings
app.set("port",3000);
app.set("views", path.join(__dirname, 'views')); //obtener ruta de la carpeta
app.engine('html', require('ejs').renderFile) //extension que renderisa el motor de plantillas
app.set("view engine", "ejs"); //extension de archivos de motor de plantilla

//milddlewares

//routes
app.use(require('./routes/index')); //usar el archivo para utilizar multiples rutas

//static files
app.use(express.static(path.join(__dirname,'public')));

//inicia servidor
app.listen(app.get("port"), () => {
    console.log("iniciando en el puerto", app.get("port"));
});