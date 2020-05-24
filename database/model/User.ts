import Roadmap from "./Roadmap";
import Week from "./Week";
import Task from "./Task";
import UserRoadmaps from "./UserRoadmaps";

export default class User {
  id: number;
  name: string;
  roadmaps: UserRoadmaps;
  nestedRoadmaps: UserRoadmaps;

  constructor(name: string) {
    this.name = name;
    this.id = 1;
    this.roadmaps = new UserRoadmaps();
    this.nestedRoadmaps = new UserRoadmaps();
  }

  createNewRoadmap(title: string) {
    let newRoadmap = new Roadmap(title);
    this.roadmaps.addRoadmap(newRoadmap);
  }

  addTaskToRoadmap(roadmapID: number, taskTitle: string) {
    let newTask = new Task(taskTitle);
    this.roadmaps.addStepToRoadmap(roadmapID, newTask);
  }

  addRoadmapToRoadmap(roadmapID: number, roadmapTitle: string) {
    let newRoadmap = new Roadmap(roadmapTitle);
    this.roadmaps.addStepToRoadmap(roadmapID, newRoadmap);
    this.nestedRoadmaps.addRoadmap(newRoadmap);
  }
  addTaskToNestedRoadmap(roadmapID: number, taskTitle: string) {
    let newTask = new Task(taskTitle);
    this.nestedRoadmaps.addStepToRoadmap(roadmapID, newTask);
  }
  addRoadmapToNestedRoadmap(roadmapID: number, roadmapTitle: string) {
    let newRoadmap = new Roadmap(roadmapTitle);
    this.nestedRoadmaps.addStepToRoadmap(roadmapID, newRoadmap);
    this.nestedRoadmaps.addRoadmap(newRoadmap);
  }
}
