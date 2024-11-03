'use strict'

const si = require('systeminformation');

exports.networkInterfacesData = async function(req, res) {
    try {
        const data = await si.networkInterfaces();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.networkInterfaceDefaultData = async function(req, res) {
    try {
        const data = await si.networkInterfaceDefault();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.networkGatewayDefaultData = async function(req, res) {
    try {
        const data = await si.networkGatewayDefault();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.networkStatsData = async function(req, res) {
    try {
        const data = await si.networkStats();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.networkConnectionsData = async function(req, res) {
    try {
        const data = await si.networkConnections();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}