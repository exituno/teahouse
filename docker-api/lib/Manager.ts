import type { Connector } from "./types/DockerConnector.ts";

export abstract class Manager {
    private connector: Connector;
    private version: string;

    constructor(connector: Connector, version: string) {
        this.connector = connector;
        this.version = version;
    }
}
