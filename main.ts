import Docker from "./docker-api/mod.ts";

import nhttp, { RequestEvent } from "jsr:@nhttp/nhttp";
import adapter from "@nhttp/trpc";
import { initTRPC } from "npm:@trpc/server";

if (import.meta.main) {
  const engine = new Docker("tcp://localhost:2375");

  const t = initTRPC.context<RequestEvent>().create();
  const router = t.router;

  const appRouter = router({
    ping: t.procedure.query(() => {
      return { message: "pong" };
    }),
  });

  const app = nhttp();
  app.use("/", adapter({ router: appRouter }));

  app.listen(8000, (_err, info) => {
    console.log(`Running on port ${info.port}`);
  });

  console.log(await engine.version());
}
