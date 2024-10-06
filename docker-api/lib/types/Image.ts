export interface Image {
    ID: string;
    Descriptor: OCIDescriptor;
    Available: boolean;
    Kind: "image" | "attestation" | "unknown";
    ImageData?: ImageData | null;
    Platform: OCIPlatform;
    Containers: string[];
    AttestationData?: AttestationData | null;
    For: string;
}

interface OCIDescriptor {
    mediaType: string;
    digest: string;
    size: number;
}

interface ImageData {
    // Define image-specific fields as per your requirements
}

interface AttestationData {
    // Define attestation-specific fields as per your requirements
}

interface OCIPlatform {
    architecture: string;
    os: string;
}

interface ImageResponse {
    Id: string;
    ParentId: string;
    RepoTags: string[];
    RepoDigests: string[];
    Created: number;
    Size: number;
    SharedSize: number;
    VirtualSize?: number;
    Labels: { [key: string]: string };
    Containers: number;
    Manifests?: any[];
}
