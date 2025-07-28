import { Hono } from "hono";
import layoffData from "../../public/layoff.json";

export const layoff = new Hono();

layoff.get("/", (c) => {
  const value =
    // phrases aléatoire selon la taille du tableau du json
    layoffData.phrases[Math.floor(Math.random() * layoffData.phrases.length)];
  return c.json({ message: value });
});
