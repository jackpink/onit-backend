// Get roadmaps for a user

const getAllRoadmaps = (req, res) => {
  // get all roadmaps for user in database
  res.send({ user: "here are all roadmaps" });
};

const getCurrentRoadmaps = (req, res) => {
  res.send({ user: "here are current roadmaps" });
};

const getPastRoadmaps = (req, res) => {
  res.send({ user: "here are past roadmaps" });
};

module.exports = {
  getAllRoadmaps,
  getCurrentRoadmaps,
  getPastRoadmaps,
};
