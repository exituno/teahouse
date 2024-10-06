export interface Network {
    Name: string;
    Id: string;
    Created: string;
    Scope: string;
    Driver: string;
    EnableIPv4: boolean;
    EnableIPv6: boolean;
    IPAM: IPAM;
    Options?: Record<string, string>;
    Internal?: boolean;
    Attachable?: boolean;
    Ingress?: boolean;
    ConfigFrom?: ConfigReference;
    Containers?: Record<string, NetworkContainer>;
    Peers?: PeerInfo[] | null;
}

interface IPAM {
    Driver?: string;
    Config?: IPAMConfig[];
}

interface IPAMConfig {
    Subnet: string;
    IPRange?: string;
    Gateway?: string;
    AuxiliaryAddresses?: Record<string, string>;
}

interface ConfigReference {
    Network: string;
    ConfigOnly?: boolean;
}

interface NetworkContainer {
    Name: string;
    EndpointID: string;
    MacAddress: string;
    IPv4Address: string;
    IPv6Address: string;
    Options?: Record<string, string>;
}

interface PeerInfo {
    Name: string;
    IP: string;
}
