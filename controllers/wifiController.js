'use strict'

const si = require('systeminformation');

exports.wifiNetworksData = async function(req, res) {
    try {
        const data = await si.wifiNetworks();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.wifiInterfacesData = async function(req, res) {
    try {
        const data = await si.wifiInterfaces();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.wifiConnectionsData = async function(req, res) {
    try {
        const data = await si.wifiConnections();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}