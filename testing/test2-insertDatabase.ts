import User from "../database/model/User";

// Create a test User
let user1: User = new User("test");

// Create a basic roadmap1 (all tasks) for User
user1.createNewRoadmap("Create Tests for Backend");
const roadmapID = 0;
user1.roadmaps[0].updateID(0);

// Create tasks for new roadmap
user1.addTaskToRoadmap(roadmapID, "Create a User");
user1.addTaskToRoadmap(roadmapID, "Add a roadmap to User");
user1.addTaskToRoadmap(roadmapID, "Add tasks to roadmap");
user1.addTaskToRoadmap(roadmapID, "Add roadmap to roadmap");

// Create a nested roadmap2 which includes roadmap1 and tasks
user1.addRoadmapToRoadmap(roadmapID, "Add connection to PostgreSQL database");
user1.nestedRoadmaps[0].updateID(0);

user1.addTaskToNestedRoadmap(roadmapID, "Create Schema");
user1.addTaskToNestedRoadmap(
  roadmapID,
  "Create local postgresSQL database and connect to it"
);
user1.addTaskToNestedRoadmap(
  roadmapID,
  "Create Knex calls to insert data into it"
);
user1.addTaskToNestedRoadmap(
  roadmapID,
  "Create Knex calls to retrieve data for objects"
);

console.log(user1.getRoadmaps());
