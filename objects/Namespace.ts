import type { Project } from "./Project.ts";

export class Namespace {
    constructor(public name: string, public projects: Project[] = []) {}

    addProject(project: Project) {
        this.projects.push(project);
    }

    getProject(name: string) {
        return this.projects.find((p) => p.name === name);
    }
}
