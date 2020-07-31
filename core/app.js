const express = require("express");
const bodyParser = require("body-parser");
const roadmaps = require("./roadmaps.js");
const roadmap = require("./roadmap.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 5000);

app.get("/api/roadmaps/", roadmaps.getAllRoadmaps);

app.get("/api/roadmaps/current/", roadmaps.getCurrentRoadmaps);

app.get("/api/roadmaps/past/", roadmaps.getPastRoadmaps);

app.post("/api/roadmap/", roadmap.createRoadmap);

app.get("/api/roadmap/:id", (req, res) => {
  res.send("<p>we amfe it</p>");
});
