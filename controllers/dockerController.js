'use strict'

const si = require('systeminformation');

exports.dockerInfoData = async function(req, res) {
    try {
        const data = await si.dockerInfo();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.dockerImagesData = async function(req, res) {
    try {
        const data = await si.dockerImages();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.dockerContainersData = async function(req, res) {
    try {
        const data = await si.dockerContainers();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.dockerContainerStatsData = async function(req, res) {
    try {
        const data = await si.dockerContainerStats();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.dockerContainerProcessesData = async function(req, res) {
    try {
        const data = await si.dockerContainerProcesses();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.dockerVolumesData = async function(req, res) {
    try {
        const data = await si.dockerVolumes();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.dockerAllData = async function(req, res) {
    try {
        const data = await si.dockerAll();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}