const express = require("express");
const router = express.Router();
const axios = require('axios');
const colors = require('colors');
const { setTimeout } = require("core-js");

const auth = {
    auth:{
        username:'admin',
        password:'emqxsecret'
    }
};
global.saverResourse = null;
global.alarmResourse = null;

//"*************************************
//****    EMQX RESOURSES MANAGER    ****
//"*************************************

async function listResourses(){
    const url = "http://192.168.2.2:8085/api/v4/resources";
    const response = await axios.get(url,auth);
    const size = res.data.data.length;
    console.log(response.data.data.length);
    if (size == 0){
        console.log("*****  Creando EMQX webhook resources  *****".green);
        createResources();
    }else if(size == 2  ){
        
    }
}

setTimeout(() => {
    listResourses();
}, 1000);

module.exports = router;