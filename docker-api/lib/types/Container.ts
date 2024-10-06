export interface Container {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number; // int64
  Ports: Port[];
  SizeRw: number | null;
  SizeRootFs: number | null;
  Labels: { [key: string]: string };
  State: string;
  Status: string;
  HostConfig: {
    NetworkMode: string;
  };
  Annotations: { [key: string]: string } | null;
  NetworkSettings: {
    Networks: { [key: string]: Network };
  };
  Mounts: MountPoint[];
}

interface Port {
  IP?: string;
  PrivatePort: number;
  PublicPort?: number;
  Type: string;
}

interface Network {
  IPAddress: string;
  Gateway: string;
  MacAddress: string;
}

interface MountPoint {
  Type: "bind" | "volume" | "tmpfs" | "npipe" | "cluster";
  Name?: string;
  Source?: string;
  Destination: string;
  Driver?: string;
  Mode?: string;
  RW: boolean;
  Propagation?: string;
}
