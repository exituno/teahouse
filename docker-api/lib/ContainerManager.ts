import { Manager } from "./Manager.ts";
import type { Container } from "./types/Container.ts";
import type { Connector } from "./types/DockerConnector.ts";
import type { TeaResponse } from "./types/TeaResponse.ts";

export class ContainerManager extends Manager {
    constructor(connector: Connector, version: string) {
        super(connector, version);
    }

    public async list(): Promise<TeaResponse<Container>> {
        const res = await this.connector.request(
            "GET",
            "/containers/json",
        );

        const data = await res.json();

        switch (res.status.valueOf()) {
            case 200:
                return {
                    code: 200,
                    success: true,
                    data: data as Container,
                };
            case 400:
                return {
                    code: 500,
                    success: false,
                    message: data.message ?? "Bad Parameter",
                };
            case 500:
                return {
                    code: 500,
                    success: false,
                    message: data.message ?? "Server Error",
                };
            default:
                return {
                    code: -1,
                    success: false,
                    message: data.message ??
                        `Unexpected status code: ${res.status}`,
                };
        }
    }
}
