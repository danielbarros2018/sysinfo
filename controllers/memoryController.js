'use strict'

const si = require('systeminformation');

exports.memoryData = async function(req, res) {
    try {
        const data = await si.mem();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.memoryLayoutData = async function(req, res) {
    try {
        const data = await si.memLayout();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}
