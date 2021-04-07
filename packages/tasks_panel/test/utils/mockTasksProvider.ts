import { ConfiguredTask } from "@vscode-tasks-explorer/task_contrib_types";
import {
  ITasksEventHandler,
  ITasksProvider,
} from "../../src/services/definitions";

export class MockTasksProvider implements ITasksProvider {
  constructor(private tasks: ConfiguredTask[]) {}

  async getConfiguredTasks(): Promise<ConfiguredTask[]> {
    return this.tasks;
  }

  registerEventHandler(eventHandler: ITasksEventHandler): void {
    return;
  }

  async getAutoDectedTasks(): Promise<ConfiguredTask[]> {
    return this.tasks;
  }
}