import { Hono } from "hono";
import corporateData from "../../public/corporate.json";

export const corporate = new Hono();

corporate.get("/", (c) => {
  const result =
    corporateData.phrases[
      Math.floor(Math.random() * corporateData.phrases.length)
    ];
  return c.json({ message: result });
});
