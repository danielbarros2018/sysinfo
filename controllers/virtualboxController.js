'use strict'

const si = require('systeminformation');

exports.virtualboxData = async function(req, res) {
    try {
        const data = await si.vboxInfo();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}