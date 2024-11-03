'use strict'

const si = require('systeminformation');

exports.printerData = async function(req, res) {
    try {
        const data = await si.printer();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}