import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env.ts";
import { schema } from "./schema/index.ts";
// import { schema } from './schema/index.ts'

export const sql = postgres(env.DATABASE_URL);
export const db = drizzle(sql, {
  schema,
  casing: "snake_case"
});

/* Testar se o banco funciona */
const result = await sql`Select 'TESTE' as message`;
console.log(result);
