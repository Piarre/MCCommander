import { cpSync, existsSync, mkdir } from "fs";
import { resolve } from "path";
import { chdir } from "process";
import { ServerType } from "../@types/minecraft.js";
import Log from "./log.js";
import { versions } from "./minecraft.js";

const execa = import("execa");

// const getPlatform = () => {
//   switch (process.platform) {
//     case "win32":
//       return "windows";
//     case "linux":
//       return "linux";
//     case "darwin":
//       return "macos";
//     default:
//       return "linux";
//   }
// };

export const getJar = async (version: string, type: ServerType = "VANILLA", path?: string) => {
  const URL = type == "VANILLA" ? versions[version].vanilla : versions[version].spigot;

  await (
    await execa
  ).execa("curl", ["-k", URL ?? versions[version].vanilla, "-o", "server.jar"], {
    cwd: path ? `${process.cwd()}/${path}` : process.cwd(),
  });
};

export const createServer = async (directory: string, version: string, type?: ServerType) => {
  const { log, error } = new Log();

  if (!existsSync(`${process.cwd()}/${directory}`)) {
    log("Creating server directory...");
    await mkdir(`./${directory}`, () => {
      getJar(version, type, directory);
      cpSync(`${resolve(__dirname)}/template/`, `${process.cwd()}/${directory}`, {
        recursive: true,
      });
    });
    log("Server directory created");
  } else {
    error("Server directory already exists");
  }
};
