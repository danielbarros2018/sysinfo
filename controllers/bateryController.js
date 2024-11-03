'use strict'

const si = require('systeminformation');

exports.batteryData = async function(req, res) {
    try {
        const data = await si.battery();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}