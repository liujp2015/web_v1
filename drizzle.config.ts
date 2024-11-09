import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: "121.40.217.41",
    port: 5432,
    user: "postgres",
    password: "123456",
    database: "postgres",
    ssl: false,
  },
  verbose: true,
  strict: true,
});
