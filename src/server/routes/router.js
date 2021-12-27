const express = require('express');
const route = express.Router()
const First=require("../../models/first");
const services = require('../services/render');
const controller = require('../controller/controller');
route.get('/admin', services.homeRoutes);
route.get('/add-user', services.add_user);
route.get('/update-user', services.update_user)
// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
route.get("/", (req, res) => {
    res.render("register");
});
route.get("/login", (req, res) => {
    res.render("base");
});
route.get("/permission", (req, res) => {
    res.render("permission");
});
route.get("/instructions", (req, res) => {
    res.render("instructions");
});
route.get("/table", (req, res) => {
    res.render("table")
});
route.get("/mcq", (req, res) => {

    First.find({},(err, data) => {
        res.render("mcq", {
            use1:data
        });
        console.log(data)
        console.log(err);
    });
});
route.get("/essay", (req, res) => {
    First.find({}, function (err, data) {
        const random = Math.floor(Math.random() * data.length);
        console.log(random);
        res.render("essay", {
            use: data,
            ra: random
        });
        console.log(err);
    });
});
route.get("/final", (req, res) => {
    res.render("final");
});
module.exports = route