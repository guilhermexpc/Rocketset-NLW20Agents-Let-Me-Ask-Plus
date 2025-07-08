import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";
import { sql } from "./db/connection.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173"
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

//BKP
// app.listen( { port: process.env.PORT ? Number(process.env.PORT) : 3333 }).then(() => {
//   console.log(`Port: ${process.env.PORT}`)
//   console.log("HTTP Server running! FOI WOOOOO");
//  })

// app.get("/testonildo", () => {
//   return "OK";
// });

app.get("/health", () => {
  return "OK";
});

app.listen({ port: env.PORT }).then(() => {
  console.log(`Port: ${process.env.PORT}`);
  console.log("HTTP Server running! FOI WOOOOO");
});
