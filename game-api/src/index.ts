import fastify from "fastify";
import gameRouter from "./routes/game.router";

const port = 5003;
const startServer = async () => {
  try {
    const server = fastify();
    const errorHandler = (error, address) => {
      server.log.error(error, address);
    };
    server.register(gameRouter, { prefix: "/game" });
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
