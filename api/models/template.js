import mongoose from "mongoose";
// const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    userId: { type: String, required: [true] },
    name: { type: String, required: [true] },
    description: { type: String },
    createdTime: { type: Number },
    widgets: {type: Array, default: []}

});

// VALIDACION
// templateSchema.plugin(uniqueValidator, { message: 'Error, el template ya existe' });

// ESQUEMA a MODELO
const Template = mongoose.model('Template', templateSchema);

export default Template;