'use strict'

const si = require('systeminformation');

exports.cpuData = async function(req, res) {
    try {
        const data = await si.cpu();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.flagsData = async function(req, res) {
    try {
        const data = {};
        const flags = await si.cpuFlags();
        data.flags = flags.split(' ');
        res.send(JSON.stringify(data));
    } catch (e) {
        console.log(e)
    }
}

exports.temperatureData = async function(req, res) {
    try {
        const data = await si.cpuTemperature();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.cacheData = async function(req, res) {
    try {
        const data = await si.cpuCache();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.loadData = async function(req, res) {
    try {
        const data = {};
        data.fullLoad = await si.fullLoad();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.processesData = async function(req, res) {
    try {
        const data = await si.processes();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.processLoadData = async function(req, res) {
    try {
        const data = await si.processLoad('apache2, cups, dbus, networking');
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}