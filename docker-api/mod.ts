import { TCPConnector } from "./lib/connectors/TCPConnector.ts";
import type { Connector } from "./lib/types/DockerConnector.ts";
import type { DockerOptions } from "./lib/types/DockerOptions.ts";
import { VolumeManager } from "./lib/VolumeManager.ts";
import { DockerInfo } from "./lib/types/DockerInfo.ts";
import type { TeaResponse } from "./lib/types/TeaResponse.ts";
import { ContainerManager } from "./lib/ContainerManager.ts";
import { ImageManager } from "./lib/ImageManager.ts";
import { NetworkManager } from "./lib/NetworkManager.ts";
import type { DockerVersion } from "./lib/types/DockerVersion.ts";

const DEFAULT_VERSION: string = "v1.47";

export class Docker {
  private connector: Connector;
  public containers: ContainerManager;
  public images: ImageManager;
  public networks: NetworkManager;
  public volumes: VolumeManager;

  constructor(connector: string, options: DockerOptions = {}) {
    const version = options.version || DEFAULT_VERSION;
    this.connector = this.createConnector(connector);

    this.containers = new ContainerManager(this.connector, version);
    this.images = new ImageManager(this.connector, version);
    this.networks = new NetworkManager(this.connector, version);
    this.volumes = new VolumeManager(this.connector, version);
  }

  private createConnector(connectorString: string): Connector {
    if (connectorString.startsWith("tcp://")) {
      const url = new URL(connectorString);
      return new TCPConnector(url.hostname, parseInt(url.port) || 2375);
    } else {
      throw new Error(`Unsupported connector type: ${connectorString}`);
    }
  }

  public async ping(): Promise<boolean> {
    const res = await this.connector.request(
      "GET",
      "/_ping",
    );

    const data = await res.text();
    switch (res.status.valueOf()) {
      case 200:
        if (data === "OK") {
          return true;
        }
        return false;
      default:
        return false;
    }
  }

  public async version(): Promise<TeaResponse<DockerVersion>> {
    const res = await this.connector.request(
      "GET",
      "/version",
    );

    const data = await res.json();

    switch (res.status.valueOf()) {
      case 200:
        return {
          code: 200,
          success: true,
          data: data as DockerVersion,
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
          message: data.message ?? `Unexpected status code: ${res.status}`,
        };
    }
  }

  public async info(): Promise<TeaResponse<DockerInfo>> {
    const res = await this.connector.request(
      "GET",
      "/info",
    );

    const data = await res.json();

    switch (res.status.valueOf()) {
      case 200:
        return {
          code: 200,
          success: true,
          data: data as DockerInfo,
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
          message: data.message ?? `Unexpected status code: ${res.status}`,
        };
    }
  }
}

export default Docker;
