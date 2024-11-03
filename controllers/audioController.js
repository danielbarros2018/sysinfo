'use strict'

const si = require('systeminformation');

exports.audioData = async function(req, res) {
    try {
        const data = await si.audio();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}