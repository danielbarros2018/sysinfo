'use strict'

const si = require('systeminformation');

exports.diskData = async function(req, res) {
    try {
        const data = await si.diskLayout();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.blockDevicesData = async function(req, res) {
    try {
        const data = await si.blockDevices();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.sizeData = async function(req, res) {
    try {
        const data = await si.fsSize();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}
