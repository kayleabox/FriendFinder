var Peas = require("./../data/friends.js");


module.exports = function (app){

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:Peas?", function(req, res) {
  var chosen = req.Peas;

  if (chosen) {
    console.log(chosen);

    for (i = 0; i < Peas.length; i++) {
      if (chosen === Peas[i].routeName) {
        return res.json(Peas[i]);
      }
    }
    return res.json(false);
  }
  return res.json(Peas);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {

  var newPea = req.body;
  console.log(req.body)
  newPea.routeName = newPea.name.replace(/\s+/g, "").toLowerCase();

  console.log(newPea);

  Peas.push(newPea);

  res.send({redirect: "/match"});
});

app.post("/api/add", function(req, res) {
  var matches = req.body;

  console.log(matches);

  Peas.filter(function(item){
      if(item.name === matches.name){
        item['matches'] = matches.matches;
      }
  });

  res.json(Peas);
});

}