import fastify from "fastify";
import monsterRouter from "./routes/monster.router";

const port = 5005;
const startServer = async () => {
  try {
    const server = fastify();
    const errorHandler = (error, address) => {
      server.log.error(error, address);
    };
    server.register(monsterRouter, { prefix: "/monster" });
    await server.listen({ port }, errorHandler);
  } catch (e) {
    console.error(e);
  }
};
process.on("unhandledRejection", (e) => {
  console.error(e);
  process.exit(1);
});
startServer();
