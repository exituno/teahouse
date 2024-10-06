import Docker from "./docker-api/mod.ts";

if (import.meta.main) {
  const engine = new Docker("tcp://localhost:2375");
  console.log(engine);

  const r = await engine.info();
  console.log(r)
}
