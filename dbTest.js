//var express = require("express");
var mongoose = require("mongoose");

//var app = express();

//app.use(express.static("public"));

mongoose.connect('mongodb://localhost/squirrel');

var db = require("./models");

db.User.create({
        userNameFirst: "Emily",
        userNameLast: "Mckenna",
        userEmail: "emilymckenna08@gmail.com",
        userPassword: "test",
        lastLogin: 08 / 26 / 1992,
        status: "Active",
    }, {
        userNameFirst: "Mitchell",
        userNameLast: "Brooks",
        userEmail: "mitchellbrooks@gmail.com",
        userPassword: "test2",
        lastLogin: 11 / 26 / 1989,
        status: "Active",
    }, )
    .then(function (dbUser) {
        console.log(dbUser);
    })
    .catch(function (err) {
        console.log(err.message);
    });

db.Collection.create({
        userId: 1,
        description: "Makeup Tutorials",
        title: "My Makeup Tuts",
        private: true,
        videos: []
    }, {
        userId: 1,
        description: "Videos of Squirrels being Squirrely",
        title: "My Squirrel Vids",
        private: false,
        videos: []
    }, {
        userId: 1,
        description: "Recipes",
        title: "My Cooking Videos",
        private: false,
        videos: []
    })
    .then(function (dbCollection) {
        console.log(dbCollection);
    })
    .catch(function (err) {
        console.log(err.message);
    });

db.Video.create({
        url: "https://www.youtube.com/watch?v=4yikpWtIFU8",
        videoPlatform: "Youtube",
        title: "10 Funniest Squirrel Videos"
    }, {
        url: "https://www.youtube.com/watch?v=IDaqFiLvcB0",
        videoPlatform: "Youtube",
        title: "Squirrels for Pets"
    }, {
        url: "https://www.youtube.com/watch?v=n9fKPPcZyS8",
        videoPlatform: "Youtube",
        title: "Squirrels being funnier than dogs?"
    }, {
        url: "https://www.youtube.com/watch?v=h6RWcDHA-h4",
        videoPlatform: "Youtube",
        title: "Rude Squirrels"
    })

    .then(function (dbVideos) {
        console.log(dbVideos);
    })
    .catch(function (err) {
        console.log(err.message);
    });