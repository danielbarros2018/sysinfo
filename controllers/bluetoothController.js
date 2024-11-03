'use strict'

const si = require('systeminformation');

exports.bluetoothData = async function(req, res) {
    try {
        const data = await si.bluetoothDevices();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}