import Roadmap from "./Roadmap";
import Task from "./Task";

export default class UserRoadmaps {
  roadmaps: Roadmap[];

  constructor() {
    this.roadmaps = [];
  }

  addRoadmap(roadmap: Roadmap) {
    this.roadmaps.push(roadmap);
  }

  getRoadmapIndex(id: number) {
    let i;
    for (i in this.roadmaps) {
      let matchRoadmapID = this.roadmaps[i].checkID(id);
      if (matchRoadmapID) {
        return i;
      }
    }
  }

  addStepToRoadmap(roadmapID: number, step: Task | Roadmap) {
    let roadmapIndex = this.getRoadmapIndex(roadmapID);
    this.roadmaps[roadmapIndex].addStep(step);
  }
}
