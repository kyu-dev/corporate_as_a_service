import { Hono } from "hono";
import { layoff } from "./routes/layoff";
import { corporate } from "./routes/corporate";

const app = new Hono();

app.route("/", corporate);
app.route("/layoff", layoff);

export default app;
