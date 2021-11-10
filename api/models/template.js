<<<<<<< HEAD
import mongoose from "mongoose";
// const uniqueValidator = require('mongoose-unique-validator');
=======
import mongoose from 'mongoose';

>>>>>>> 30a34ac528f454914434031526537c411f60b311
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    userId: { type: String, required: [true] },
    name: { type: String, required: [true] },
<<<<<<< HEAD
    description: { type: String },
    createdTime: { type: Number },
    widgets: {type: Array, default: []}

});

// VALIDACION
// templateSchema.plugin(uniqueValidator, { message: 'Error, el template ya existe' });

// ESQUEMA a MODELO
const Template = mongoose.model('Template', templateSchema);

export default Template;
=======
    description: {type: String},
    createdTime: { type: Number, required: [true] },
    widgets: {type: Array, default: []}
});


// Schema to model.
const Template = mongoose.model('Template', templateSchema);

export default Template;
>>>>>>> 30a34ac528f454914434031526537c411f60b311
