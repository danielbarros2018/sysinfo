'use strict'

const si = require('systeminformation');

exports.usbData = async function(req, res) {
    try {
        const data = await si.usb();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}