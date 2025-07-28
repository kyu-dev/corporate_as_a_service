import { Hono } from "hono";
import { layoff } from "./routes/layoff";
import { corporate } from "./routes/corporate";
import { dontcare } from "./routes/dontcare";

const app = new Hono();

app.route("/", corporate);
app.route("/layoff", layoff);
app.route("/dontcare", dontcare);

export default app;
