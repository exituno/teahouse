import type { UsageData } from "./DockerUsageData.ts";

export interface Volume {
    name: string;
    driver: string;
    mountpoint: string;
    createdAt: string;
    status?: { [key: string]: string };
    labels: { [key: string]: string };
    scope: "local" | "global";
    clusterVolume?: ClusterVolume;
}

interface ClusterVolume {
    id: string;
    version: ObjectVersion;
    index: number;
    createdAt: string;
    updatedAt: string;
    spec: ClusterVolumeSpec;
    group?: string;
    accessMode?: AccessMode;
    mountVolume?: MountVolume;
    blockVolume?: {};
    secrets?: Secret[];
    accessibilityRequirements?: AccessibilityRequirements;
    info?: VolumeInfo;
    publishStatus?: PublishStatus[];
    options: { [key: string]: string };
    usageData?: UsageData | null;
    warnings?: string[];
}

interface ObjectVersion {
    
}

interface ClusterVolumeSpec {
    
}

interface AccessMode {
    scope: "single" | "multi";
    sharing: "none" | "readonly" | "onewriter" | "all";
}

interface MountVolume {
    fsType?: string;
    mountFlags?: string[];
}

interface Secret {
    key: string;
    secret: string;
}

interface AccessibilityRequirements {
    requisite?: Topology[];
    preferred?: Topology[];
    capacityRange?: CapacityRange;
}

interface CapacityRange {
    requiredBytes: number;
    limitBytes: number;
}

interface VolumeInfo {
    capacityBytes: number;
    volumeContext?: { [key: string]: string };
    volumeID: string;
    accessibleTopology?: Topology[];
}

interface PublishStatus {
    nodeID: string;
    state:
        | "pending-publish"
        | "published"
        | "pending-node-unpublish"
        | "pending-controller-unpublish";
    publishContext?: { [key: string]: string };
}

interface Topology {
    
}
