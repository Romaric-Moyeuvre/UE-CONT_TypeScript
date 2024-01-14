import fastify from "fastify";
import matchRouter from "./routes/match.router";

const port = 5004;
const startServer = async () => {
  try {
    const server = fastify();
    const errorHandler = (error, address) => {
      server.log.error(error, address);
    };
    server.register(matchRouter, { prefix: "/match" });
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
