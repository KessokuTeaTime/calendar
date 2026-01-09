import { serve } from "bun";

const port = Number(process.env.PORT ?? 3000);

serve({
  port,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // SPA fallback
    if (path === "/") path = "/index.html";

    const file = Bun.file(`./dist${path}`);

    if (file.size === 0) {
      // fallback to index.html (SPA)
      return new Response(Bun.file("./dist/index.html"));
    }

    return new Response(file);
  },
});

console.log(`Static site running on http://0.0.0.0:${port}`);
