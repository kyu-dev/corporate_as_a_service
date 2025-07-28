import { Hono } from "hono";
import dontcareData from "../../public/dontcare.json";

export const dontcare = new Hono();

dontcare.get("/", (c) => {
  const result =
    dontcareData.phrases[
      Math.floor(Math.random() * dontcareData.phrases.length)
    ];
  return c.json({ message: result });
});

dontcare.get("/all", (c) => {
  const result = dontcareData.phrases;
  return c.json({ message: result });
});
