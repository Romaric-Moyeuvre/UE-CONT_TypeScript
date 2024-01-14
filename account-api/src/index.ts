import fastify from "fastify";
import accountRouter from "./routes/account.router";

const port = 5001;
const startServer = async () => {
  try {
    const server = fastify();
    const errorHandler = (error, address) => {
      server.log.error(error, address);
    };
    server.register(accountRouter, { prefix: "/account" });
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
