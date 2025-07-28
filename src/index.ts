import { Hono } from "hono";
import { layoff } from "./routes/layoff";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "hello" });
});

app.route("/layoff", layoff);

export default app;
