import { serve } from "https://deno.land/x/sift/mod.ts";

const title = (route: string): string => `<title>${route}</title>`;
const css = `
<style>
  html, body { height: 100%; }
  body {
    background-color: #31363b;
    color: #bbc2cf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-align: center;
  }
</style>
`;
const h1 = (content: string): string => `<h1> ${content} </h1>`;
const code = (content: string): string => `<code> ${content} </code>`;
const opts = { headers: { "content-type": "text/html; charset=utf-8" } };

function pageHandler(route: string): Response {
  if (route == "/") {
    return new Response(
      `
      ${title(route)}
      ${css}
      ${h1("Halo!")}
      ${h1("Hello!")}
      ${h1("こんにちは!")}
    `,
      opts,
    );
  }

  if (route == "404") {
    return new Response(
      `
      ${title(route)}
      ${css}
      ${h1("404????")}
    `,
      opts,
    );
  }

  return new Response(
    `
    ${title(route)}
    ${css}
    ${h1(`Kamu sedang ada di ${code("/"+route)}`)}
    ${h1(`You're currently at ${code("/"+route)}`)}
    ${h1(`今 ${code("/"+route)} にいます`)}
  `,
    opts,
  );
}

serve({
  "/": () => pageHandler("/"),
  "/:slug": (_, { slug }: any) => pageHandler(slug),
  "404": () => pageHandler("404"),
});
