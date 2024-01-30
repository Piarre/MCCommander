import { intro, outro, spinner } from "@clack/prompts";
import { rmSync } from "fs";
import { execa } from "execa";

(async () => {
  intro("👷 MCSC Builder");
  const s = spinner();
  s.start("Building");
  await rmSync("out/", {
    force: true,
    recursive: true,
  });
  await execa("npx", ["tsup"]);
  await execa("cp", ["-r", "src/template", "out/template"]);
  s.stop("Built");
  outro("✨ Done!");
})();
