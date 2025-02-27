<<<<<<< HEAD
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
app.use('/api', require('./routes/emqxapi.js'));

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
        // console.log(err);
    }
    );
} catch (error) {
    console.log("Error conectando con mongo - /api/index.js");
    // console.log(error);
}


// mongodb://devTecnocasaUser:*****@192.168.2.2:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
// ENDPOINT (REQ <= ENTRADA | RES => SALIDA)
/* app.get("/testing", (req, res)=>{
    console.log("Bye");
    res.send("Hello from API");
}) */
=======
//requires 
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");



require('dotenv').config();

//instances
const app = express();

//express config
app.use(morgan("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

//express routes
app.use("/api", require("./routes/devices.js"));
app.use("/api", require("./routes/users.js"));
app.use("/api", require("./routes/templates.js"));
app.use("/api", require("./routes/webhooks.js"));
app.use("/api", require("./routes/emqxapi.js"));
app.use("/api", require("./routes/alarms.js"));
app.use("/api", require("./routes/dataprovider.js"));
 
module.exports = app;

//listener
app.listen(process.env.API_PORT, () => {
  console.log("API server listening on port " + process.env.API_PORT);
});


if (process.env.SSLREDIRECT == "true"){

  const app2 = express();

  app2.listen(3002, function(){
    console.log("Listening on port 3002 (for redirect to ssl)");
  });
  
  app2.all('*', function(req, res){
    console.log("NO SSL ACCESS ... REDIRECTING...");
    return res.redirect("https://" + req.headers["host"] + req.url);
  });
}



//Mongo Connection
const mongoUserName = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDatabase = process.env.MONGO_DATABASE;

var uri =
  "mongodb://" +
  mongoUserName +
  ":" +
  mongoPassword +
  "@" +
  mongoHost +
  ":" +
  mongoPort +
  "/" +
  mongoDatabase;

  console.log(uri);

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  authSource: "admin"
};

mongoose.connect(uri, options).then(
  () => {
    console.log("\n");
    console.log("*******************************".green);
    console.log("✔ Mongo Successfully Connected!".green);
    console.log("*******************************".green);
    console.log("\n");
    global.check_mqtt_superuser();

  },
  err => {
    console.log("\n");
    console.log("*******************************".red);
    console.log("    Mongo Connection Failed    ".red);
    console.log("*******************************".red);
    console.log("\n");
    console.log(err);
  }
);





>>>>>>> 30a34ac528f454914434031526537c411f60b311
