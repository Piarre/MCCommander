import path from "path";
import { fileURLToPath } from "url";
import { cpSync, existsSync, mkdir } from "fs";
import { resolve } from "path";
import { ServerType } from "../@types/minecraft.js";
import Log from "./log.js";
import { versions } from "./minecraft.js";
import { supportsColorStderr } from "chalk";

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
  const { log, success ,error } = new Log();

  if (!existsSync(`${process.cwd()}/${directory}`)) {
    log("Creating server directory...");
    await mkdir(`./${directory}`, () => {
      log("Server directory created");
      log(`Downloading server jar for version ${version}.`);
      getJar(version, type, directory);
      log("Copying server files...");
      cpSync(`${resolve(__dirname)}/template/`, `${process.cwd()}/${directory}`, {
        recursive: true,
      });
    });
    success("Server created successfully");
  } else {
    error("A directory with the same name already exists.");
  }

};

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
