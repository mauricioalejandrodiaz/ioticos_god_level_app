const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/authentication.js");

import Device from "../models/device.js";

// ******************************
// ******     MODELS    *********
// ******************************

import UserDevice from "../models/device.js";

// ******************************
// ******      API      *********
// ******************************
// LISTAR DISPOSITIVOS
router.get('/device', checkAuth, async (req, res) => {
    try {
        const userId = req.userData._id;
        console.log(req.userData._id);
        const devices = await Device.find({ userId: userId });
        const toSend = {
            status: "success",
            data: devices
        };
        return res.json(toSend);
    } catch (error) {
        console.log("Error, recuperando dispositivos");
        console.log(error);
        const toSend = {
            status: "Error",
            error: error
        };
        return res.status(500).json(toSend);
    }

});
// CREAR DISPOSITIVO
router.post('/device', checkAuth, async (req, res) => {

    try {
        const userId = req.userData._id;
        var newDevice = req.body.newDevice;
        console.log(newDevice);
        newDevice.userId = userId;
        newDevice.createdTime = Date.now();
        const device = await Device.create(newDevice);
        selectDevide(userId, newDevice.dId);
        const toSend = {
            status: "Dispositivo agregado correctamente"
        };
        return res.json(toSend);

    } catch (error) {
        console.log("Error, no se puede crear el nuevo dispositivo");
        console.log(error);
        const toSend = {
            status: "Error",
            error: error
        };
        return res.status(500).json(toSend);
    }

});
// BORRAR DISPOSITIVO
router.delete('/device', checkAuth, async (req, res) => {
    try {
        const userId = req.userData._id;
        const dId = req.query.dId;

        //deleting saver rule.
        // await deleteSaverRule(dId);

        //deleting all posible alarm rules
        // await deleteAllAlarmRules(userId, dId);

        //deleting all posible mqtt device credentials
        // await deleteMqttDeviceCredentials(dId);

        //deleting device
        const result = await Device.deleteOne({ userId: userId, dId: dId });

        //devices after deletion
        // const devices = await Device.find({ userId: userId });

        /* if (devices.length >= 1) {
          //any selected?
          var found = false;
          devices.forEach(devices => {
            if (devices.selected == true) {
              found = true;
            }
          });
    
          //if no selected...
          //we need to selet the first
          if (!found) {
            await Device.updateMany({ userId: userId }, { selected: false });
            await Device.updateOne(
              { userId: userId, dId: devices[0].dId },
              { selected: true }
            );
          }
        } */

        const response = {
            status: "success",
            data: result
        };
        return res.json(response);

    } catch (error) {
        console.log("ERROR DELETING DEVICE");
        console.log(error);

        const response = {
            status: "error",
            error: error
        };

        return res.status(500).json(response);
    }
});
// });
// SELECCIONAR DISPOSITIVO
router.put('/device', checkAuth, (req, res) => {
    const dId = req.body.dId;
    const userId = req.userData._id;
    if (selectDevide(userId, dId)) {
        const toSend = {
            status: "success"
        };
        return res.json(toSend);
    } else {
        const toSend = {
            status: "error"
        };
        return res.json(toSend);
    }
});

// PRUEBAS
router.get("/testing", (req, res) => {
    // GET viene por req.query
    // console.log(req.query);
    var toReturn = {
        status: "success",
        data: "Hola desde GET"
    }
    res.json(toReturn);
    console.log("Se impacto API/testing");
    // res.send("Hello from API");
});
router.post("/testing", (req, res) => {
    // POST viene por req.body
    // console.log(req.body);
    var toReturn = {
        status: "success",
        data: "Hola desde POST"
    }
    res.json(toReturn);
    // console.log("Se impacto API/testing");
    // res.send("Hello from API");
});
// PRUEBAS

// ******************************
// *****    FUNCIONES   *********
// ******************************
async function selectDevide(userId, dId) {
    try {
        const result = await Device.updateMany({ userId: userId }, { selected: false });
        const result2 = await Device.updateOne({ dId: dId, userId: userId },{selected: true});
        return true;

    } catch (error) {
        console.log("ERROR in SELECTDEVICES");
        console.log(error);
        return false;
    }
}
module.exports = router;