import type { Connector } from "../types/DockerConnector.ts";

export class TCPConnector implements Connector {
    private baseUrl: string;

    constructor(host: string, port: number) {
        this.baseUrl = `http://${host}:${port}`;
    }

    async request(
        method: string,
        path: string,
        body?: unknown,
        headers: Record<string, string> = {},
    ): Promise<Response> {
        const url = `${this.baseUrl}${path}`;
        console.log(url)
        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        return await fetch(url, options);
    }
}
