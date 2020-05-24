import Task from "./Task";

export default class Week {
  startDate: Date;
  duration: number = 7;
  tasksForCompletion: Task[];

  constructor(startDate) {
    this.startDate = startDate;
    this.tasksForCompletion = [];
  }
}
