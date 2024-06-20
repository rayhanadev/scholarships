import "server-only";

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

import { env } from "~/env.mjs";

const sqlite = new Database(env.DATABASE_URL);

export const db = drizzle(sqlite);
