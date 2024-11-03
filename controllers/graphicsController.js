'use strict'

const si = require('systeminformation');

exports.graphicsData = async function(req, res) {
    try {
        const data = await si.graphics();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}