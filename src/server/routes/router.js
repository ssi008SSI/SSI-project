const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');
/**
 *  @description Root Route
 *  @method GET /admin
 */
route.get('/admin', services.homeRoutes);
/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user);
/**
 *  @description for update user
 *  @method GET /update-user
 */
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
    Questions.find({},(err, data) => {
        res.render("mcq", {
            use1:data
        });
        console.log(err);
    });
});
route.get("/essay", (req, res) => {
    res.render("essay");
});
route.get("/final", (req, res) => {
    res.render("final");
});
module.exports = route