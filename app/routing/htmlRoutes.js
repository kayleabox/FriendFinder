var path = require("path");

module.exports = function (app) {

    
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/service", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/service.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

app.get("/match", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/match.html"));
});

app.get("/profile", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/profile.html"));
});
}