import { rest } from "msw";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ id: "1", title: "demo", isCompleted: false }] as Todo[])
    );
  }),
  rest.post("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ id: "1", ...(req.body as object) } as Todo)
    );
  }),
  rest.patch("/todos/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ id: "1", title: "demo", ...(req.body as object) } as Todo)
    );
  }),
  rest.delete("/todos/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
