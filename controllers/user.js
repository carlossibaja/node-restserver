const { response } = require('express');

const userGet = (req, res) => {
    res.json({
        ok: true,
        msg: " get API - Controlador"
    });
}
const userPost = (req, res) => {

    const body = req.body;

    res.json({
        ok: true,
        msg: " Post API - Controlador",
        body
    });
}
const userPut = (req, res) => {
    res.json({
        ok: true,
        msg: " Put API - Controlador"
    });
}
const userDelete = (req, res) => {
    res.json({
        ok: true,
        msg: " Delete API - Controlador"
    });
}


module.exports = {
    userGet,
    userPut,
    userDelete,
    userPost
}
