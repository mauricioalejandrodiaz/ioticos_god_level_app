// REQUERIMIENTOS
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');

// CONIFG EXPRESS
const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

// ROUTES EXPRESS
app.use('/api', require('./routes/devices.js'));
app.use('/api', require('./routes/users.js'));
app.use('/api', require('./routes/templates.js'));
app.use('/api', require('./routes/webhooks.js'));


// EXPORTA CADA ENDPOINT POR SEPARADO
module.exports = app;

// LISTENER
app.listen(3001, () => {
    console.log("API on port 3001")
})

// CONEXION A MONGO
const mongoUserName = "devTecnocasaUser";
const mongoUserPass = "devTecnocasaPass";
const mongoHost = "192.168.2.2";
const mongoPort = "27017";
const mongoDB = "tecnocasa";

var uri = "mongodb://" + mongoUserName + ":" + mongoUserPass + "@" + mongoHost + ":" + mongoPort + "/" + mongoDB;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    authSource: "admin"
};

try {
    mongoose.connect(uri, options).then(() => {
        console.log("\n");
        console.log("*************************************".green);
        console.log("*   Mongo conectado correctamente   *".green);
        console.log("*************************************".green);
        console.log("\n");
    }, (err) => {
        console.log("\n");
        console.log("************************************".red);
        console.log("*      Mongo conexion fallida      *".red);
        console.log("************************************".red);
        console.log("\n");
        console.log(err);
    }
    );
} catch (error) {
    console.log("Error conectando con mongo - /api/index.js");
    console.log(error);
}


// mongodb://devTecnocasaUser:*****@192.168.2.2:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
// ENDPOINT (REQ <= ENTRADA | RES => SALIDA)
/* app.get("/testing", (req, res)=>{
    console.log("Bye");
    res.send("Hello from API");
}) */