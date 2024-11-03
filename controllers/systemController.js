'use strict'

const si = require('systeminformation');


exports.systemData = async function(req, res) {
    try {
        const data = await si.system();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}