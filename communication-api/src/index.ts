import fastify from "fastify";
import communicationRouter from "./routes/communication.router";

const port = 5002;
const startServer = async () => {
  try {
    const server = fastify();
    const errorHandler = (error, address) => {
      server.log.error(error, address);
    };
    server.register(communicationRouter, { prefix: "/communication" });
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
