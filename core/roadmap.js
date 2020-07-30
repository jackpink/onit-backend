const db = require("../database/access/db.js");

const createRoadmap = (req, res) => {
  //
  console.log([req.body["title"], req.body["status"], req.body["user"]]);
  db.pool.query(
    "INSERT INTO roadmap (title, status, user_id) VALUES ($1, $2, $3)",
    [req.body["title"], req.body["status"], req.body["user"]],
    (error, result) => {
      res.send(error ? error.stack : { user: result });
    }
  );
  db.pool.end();
};

module.exports = {
  createRoadmap,
};
