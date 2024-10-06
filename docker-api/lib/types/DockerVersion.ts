export interface DockerVersion {
    Platform: Platform;
    Components: Component[];
    Version: string;
    ApiVersion: string;
    MinAPIVersion: string;
    GitCommit: string;
    GoVersion: string;
    Os: string;
    Arch: string;
    KernelVersion?: string;
    Experimental?: boolean;
    BuildTime?: string;
}

interface Platform {
    Name: string;
}

interface Component {
    Name: string;
    Version: string;
    Details?: Record<string, string> | null;
}
