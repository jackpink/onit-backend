import { Status } from "./Status";

export default class Task {
  id: number;
  title: string;
  status: Status;
  completion?: Date;

  constructor(title: string) {
    this.title = title;
    this.status = "notActive";
  }
}
