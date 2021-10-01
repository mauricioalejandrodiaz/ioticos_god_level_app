import mongoose from "mongoose";
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
