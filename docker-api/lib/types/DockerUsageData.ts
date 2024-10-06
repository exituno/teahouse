export interface UsageData {
  Containers: number;
  Images: number;
  MemoryUsage: number;
  CPUUsage: number;
  DiskUsage: number;
  Network: {
    BytesSent: number;
    BytesReceived: number;
  };
  Uptime: number;
  LastUpdated: string;
}
