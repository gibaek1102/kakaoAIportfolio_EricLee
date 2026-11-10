// src/main.tsx 를 번들하고 Tailwind CSS 를 만들어 scripts/template.html 에 넣어 루트 index.html 하나로 만든다.
import { build } from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

execFileSync("npx", ["tailwindcss", "-i", "scripts/in.css", "-o", "scripts/out.css", "--minify"], { stdio: "inherit" });
const out = await build({
  entryPoints: ["src/main.tsx"], bundle: true, minify: true, write: false,
  jsx: "automatic", format: "iife", target: "es2019", logLevel: "warning",
  define: { "process.env.NODE_ENV": '"production"' },
});
const js = out.outputFiles[0].text.replace(/<\/script>/g, "<\\/script>");
const css = readFileSync("scripts/out.css", "utf8");
const tpl = readFileSync("scripts/template.html", "utf8");
writeFileSync("index.html", tpl.replace("/*__CSS__*/", () => css).replace("/*__BUNDLE__*/", () => js));
console.log("index.html 생성 완료");
