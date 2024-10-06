import { Manager } from "./Manager.ts";
import type { Connector } from "./types/DockerConnector.ts";

export class ContainerManager extends Manager {
    constructor(connector: Connector, version: string) {
        super(connector, version);
    }
}