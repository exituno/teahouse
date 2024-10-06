import { assertEquals } from "jsr:@std/assert";

Deno.test("Test Sample", () => {
    const x = 1 + 2;
    assertEquals(x, 3);
});
