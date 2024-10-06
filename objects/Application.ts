export class Application {
    private envVars: Record<string, string> = {};

    constructor(public name: string) {}

    async start() {
        try {
            await docker.containers.create({
                name: this.name,
                Image: this.name,
                Env: Object.entries(this.envVars).map(([k, v]) => `${k}=${v}`),
            });
            await docker.containers.start(this.name);
            return `App ${this.name} started successfully.`;
        } catch (error) {
            throw new Error(
                `Failed to start app ${this.name}: ${error.message}`,
            );
        }
    }

    async stop() {
        try {
            await docker.containers.stop(this.name);
            return `App ${this.name} stopped successfully.`;
        } catch (error) {
            throw new Error(
                `Failed to stop app ${this.name}: ${error.message}`,
            );
        }
    }

    async getLogs() {
        try {
            const logs = await docker.containers.logs(this.name);
            return logs;
        } catch (error) {
            throw new Error(
                `Failed to get logs for app ${this.name}: ${error.message}`,
            );
        }
    }

    setEnvVar(key: string, value: string) {
        this.envVars[key] = value;
        return `Environment variable ${key} set for app ${this.name}.`;
    }

    getEnvVars() {
        return this.envVars;
    }
}
