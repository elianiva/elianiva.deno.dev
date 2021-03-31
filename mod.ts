import { serve, serveStatic } from "https://deno.land/x/sift/mod.ts"

serve({
  "/": serveStatic("./index.html", {
    baseUrl: import.meta.url,
    intervene: async res =>
      new Response(await res.text(), {
        headers: { "content-type": "text/html; charset=utf-8" },
      }),
  }),
  "/:filename+": serveStatic(".", { baseUrl: import.meta.url }),
})
