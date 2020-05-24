import { Status } from "./Status";
import Step from "./Step";
import Task from "./Task";

export default class Roadmap {
  id: number;
  title: string;
  status: Status;
  steps: Array<Task | Roadmap>;
  completion?: Date;

  constructor(title: string) {
    this.title = title;
    this.status = "notActive";
    this.steps = [];
  }

  addStep(step: Task | Roadmap) {
    this.steps.push(step);
  }

  updateID(id: number) {
    this.id = id;
  }

  checkID(id: number) {
    return this.id === id;
  }
}
