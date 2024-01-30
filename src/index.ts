import { Command } from "commander";
import pkg from "../package.json";
import { versions } from "./lib/minecraft.js";
import { createServer, getJar } from "./lib/utils.js";
import path from "path";
import Log from "./lib/log.js";

export const MCSC = new Command();

MCSC.version(pkg.version);

MCSC.argument("<version>", "Set the version of the server to download")
  .option("-s, --spigot", "Get a Spigot server")
  .option("-d, --directory <directory>", "Set the directory where the server will be created")
  .action(async (str, options) => {
    const version = str;
    const { s: isSpigot, directory: dir } = options;
    if (!(version in versions)) {
      console.log("Minecraft version not found.");
    }
    if (version in versions && !isSpigot) {
      createServer(dir, version);
    } else if (version in versions && isSpigot) {
      if (versions[version]?.spigot == null) {
        createServer(dir, version, "SPIGOT");
      } else {
        new Log().error("Spigot is not available for this version.");
      }
    }
  });

MCSC.parse(process.argv);
