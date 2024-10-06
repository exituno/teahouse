import type { Application } from "./Application.ts";

export class Project {
    constructor(public name: string, public apps: Application[] = []) {}

    addApp(app: Application) {
        this.apps.push(app);
    }

    getApp(name: string) {
        return this.apps.find((a) => a.name === name);
    }
}
