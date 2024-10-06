export interface DockerInfo {
    ID: string;
    Containers: number;
    ContainersRunning: number;
    ContainersPaused: number;
    ContainersStopped: number;
    Images: number;
    Driver: string;
    DriverStatus: [string, string][];
    DockerRootDir: string;
    Plugins: PluginsInfo;
    MemoryLimit: boolean;
    SwapLimit: boolean;
    KernelMemoryTCP?: boolean;
    CpuCfsPeriod: boolean;
    CpuCfsQuota: boolean;
    CPUShares: boolean;
    CPUSet: boolean;
    PidsLimit: boolean;
    OomKillDisable: boolean;
    IPv4Forwarding: boolean;
    BridgeNfIptables: boolean;
    BridgeNfIp6tables: boolean;
    Debug: boolean;
    NFd?: number;
    NGoroutines?: number;
    SystemTime: string;
    LoggingDriver: string;
    CgroupDriver: "cgroupfs" | "systemd" | "none";
    CgroupVersion: "1" | "2";
    NEventsListener: number;
    KernelVersion: string;
    OperatingSystem: string;
    OSVersion: string;
    OSType: string;
    Architecture: string;
    NCPU: number;
    MemTotal: number;
    IndexServerAddress: string;
    RegistryConfig?: RegistryServiceConfig | null;
    GenericResources?: GenericResource[];
    HttpProxy: string;
    HttpsProxy: string;
    NoProxy: string;
    Name: string;
    Labels: string[];
    ExperimentalBuild: boolean;
    ServerVersion: string;
    Runtimes: Record<string, { path: string }>;
    DefaultRuntime: string;
    Swarm: SwarmInfo;
    LiveRestoreEnabled: boolean;
    Isolation: "default" | "hyperv" | "process";
    InitBinary: string;
    ContainerdCommit: Commit;
    RuncCommit: Commit;
    InitCommit: Commit;
    SecurityOptions: string[];
    ProductLicense: string;
    DefaultAddressPools: AddressPool[];
    Warnings: string[];
    CDISpecDirs: string[];
    Containerd?: ContainerdInfo | null;
}

interface PluginsInfo {
    Volume: string[];
    Network: string[];
    Authorization: string[];
    Log: string[];
}

interface RegistryServiceConfig {
    IndexConfigs: Record<
        string,
        { Mirrors: string[]; Name: string; Secure: boolean }
    >;
    InsecureRegistryCIDRs: string[];
    Mirrors: string[];
}

interface GenericResource {
    Kind: string;
    Value: string;
}

interface SwarmInfo {
    NodeID: string;
    NodeAddr: string;
    LocalNodeState: string;
    ControlAvailable: boolean;
    Error: string;
    RemoteManagers: RemoteManager[];
}

interface RemoteManager {
    NodeID: string;
    Addr: string;
}

interface Commit {
    ID: string;
    Expected: string;
}

interface AddressPool {
    Base: string;
    Size: number;
}

interface ContainerdInfo {
    Namespace: string;
    Addr: string;
}
