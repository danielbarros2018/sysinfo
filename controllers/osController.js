'use strict'

const si = require('systeminformation');

exports.osData = async function(req, res) {
    try {
        const data = await si.osInfo();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.shellData = async function(req, res) {
    try {
        const data = {};
        data.shell = await si.shell();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.versionsData = async function(req, res) {
    try {
        const data = await si.versions();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

exports.usersData = async function(req, res) {
    try {
        const data = await si.users();
        res.send(data);
    } catch (e) {
        console.log(e)
    }
}

