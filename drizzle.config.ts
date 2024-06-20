import { defineConfig } from "drizzle-kit";

import { env } from "~/env.mjs";

console.log(env.DATABASE_URL);

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/lib/db/schema/*",
  out: "./migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
