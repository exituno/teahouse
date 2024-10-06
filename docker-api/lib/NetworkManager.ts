import { Manager } from "./Manager.ts";
import type { Connector } from "./types/DockerConnector.ts";
import type { Network } from "./types/Network.ts";
import type { TeaResponse } from "./types/TeaResponse.ts";

export class NetworkManager extends Manager {
  constructor(connector: Connector, version: string) {
    super(connector, version);
  }

  public async list(): Promise<TeaResponse<Network>> {
    const res = await this.connector.request(
      "GET",
      "/networks",
    );

    const data = await res.json();

    switch (res.status.valueOf()) {
      case 200:
        return {
          code: 200,
          success: true,
          data: data as Network,
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
