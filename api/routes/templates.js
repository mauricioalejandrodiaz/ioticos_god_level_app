<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/authentication.js");

//MODELS IMPORT
import Template from "../models/template.js";

// RECUPERAR TEMPLATES
router.get('/template', checkAuth, async (req, res) => {
    try {
        const userId = req.userData._id;

        const templates = await Template.find({ userId: userId });
        const response = {
            status: "success",
            data: templates
        };
        return res.json(response);
    } catch (error) {
        console.log("Error, recuperando dispositivos");
        // console.log(error);
        const response = {
            status: "Error",
            error: error
        };
        return res.status(500).json(response);
    }

});
// CREAR TEMPLATE
router.post('/template', checkAuth, async (req, res) => {
    try {
        const userId = req.userData._id;
        var newTemplate = req.body.template;
        // console.log("llego al router");
        // console.log(newTemplate);
        newTemplate.userId = userId;
        newTemplate.createdTime = Date.now();

        const template = await Template.create(newTemplate);

        const response = {
            status: "success"
        }
        
        return res.json(response);

    } catch (error) {
        console.log("Error, no se puede crear el nuevo template");
        // console.log(error);
        const toSend = {
            status: "Error",
            error: error
        };
        return res.status(500).json(toSend);
    }

});
// BORRAR TEMPLATE
router.delete('/template', checkAuth, async (req, res) => {
    try {
        const userId = req.userData._id;
        const templateId = req.query.templateId;

        const template = await Template.deleteOne({userId:userId,_id:templateId});
        const response = {
            status: "success"
        }        
        return res.json(response);

    } catch (error) {
        console.log("Error, no se puedo borrar el nuevo template");
        // console.log(error);
        const response = {
            status: "Error",
            error: error
        };
        return res.status(500).json(response);
=======
const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middlewares/authentication.js');

//models import
import Template from '../models/template.js';
import Device from '../models/device.js';

//get templates
router.get('/template', checkAuth, async (req, res) => {

    try {

        const userId = req.userData._id;

        const templates = await Template.find({userId: userId});

        console.log(userId);
        console.log(templates)

        const response = {
            status: "success",
            data: templates
        }

        return res.json(response);

    } catch (error) {

        console.log(error);

        const response = {
            status: "error",
            error: error
        }

        return res.status(500).json(response);

    }

});

//create template
router.post('/template', checkAuth, async (req, res) => {

    try {

        const userId = req.userData._id;

        var newTemplate = req.body.template;

        newTemplate.userId = userId;
        newTemplate.createdTime = Date.now();

        const r = await Template.create(newTemplate);

        const response = {
            status: "success",
        }

        return res.json(response)

    } catch (error) {

        console.log(error);

        const response = {
            status: "error",
            error: error
        }

        return res.status(500).json(response);

    }

});

//delete template
router.delete('/template', checkAuth, async (req, res) => {

    try {

        const userId = req.userData._id;
        const templateId = req.query.templateId;

        const devices = await Device.find({userId: userId, templateId: templateId });


        if (devices.length > 0){

            const response = {
                status: "fail",
                error: "template in use"
            }
    
            return res.json(response);
        }

        const r = await Template.deleteOne({userId: userId, _id: templateId});

        const response = {
            status: "success",
        }

        return res.json(response)

    } catch (error) {

        console.log(error);

        const response = {
            status: "error",
            error: error
        }

        return res.status(500).json(response);

>>>>>>> 30a34ac528f454914434031526537c411f60b311
    }

});

module.exports = router;