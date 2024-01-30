type ServerType = "VANILLA" | "SPIGOT";

type Server = Record<string | number, { vanilla: string; spigot: string | null }>;

export { type ServerType, type Server };
