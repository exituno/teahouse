import { assert, assertEquals, assertExists } from "jsr:@std/assert";
import Docker from "../docker-api/mod.ts";

Deno.test("Docker: ping", async () => {
    const engine = new Docker("tcp://localhost:2375");
    const isReachable = await engine.ping();

    assertEquals(isReachable, true);
});

Deno.test("Docker: info", async () => {
    const engine = new Docker("tcp://localhost:2375");
    const info = await engine.info();

    assertEquals(info.success, true);
    assertExists(info.data)
    assert(info.data.Containers >= 0);
    assert(info.data.Images >= 0);
    assert(typeof info.data.ServerVersion === "string");
});

Deno.test("Docker: version", async () => {
    const engine = new Docker("tcp://localhost:2375");
    const info = await engine.version();

    assertEquals(info.success, true);
    assertExists(info.data)
    assert(typeof info.data.ApiVersion === "string");
    assert(typeof info.data.Version === "string");
});
