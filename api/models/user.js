import mongoose from "mongoose";
<<<<<<< HEAD
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: { type: String, required: [true] },
    email: { type: String, required: [true], unique: true },
    password: { type: String, required: [true] },
});


// VALIDACION
userSchema.plugin (uniqueValidator, {message: "Error, el mail ya existe."});

// CONVERTIR A MODELO
const User = mongoose.model('User', userSchema);

export default User;
=======
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true] },
  email: { type: String, required: [true], unique: true},
  password: {  type: String, required: [true]},
});


//Validator
userSchema.plugin(uniqueValidator, { message: 'Error, email already exists.'});


// convert to model
const User = mongoose.model('User', userSchema);

export default User;

>>>>>>> 30a34ac528f454914434031526537c411f60b311
