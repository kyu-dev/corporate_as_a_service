import { Hono } from "hono";

export const layoff = new Hono();

layoff.get("/", (c) => {
  return c.text("hello you");
});
