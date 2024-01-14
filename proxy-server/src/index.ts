import fastify from "fastify";
import fastifyHttpProxy from "@fastify/http-proxy";

const port = 5000;

const startProxyServer = async () => {
  try {
    const proxyServer = fastify();

    const errorHandler = (error, address) => {
      proxyServer.log.error(error, address);
    };

    proxyServer.register(fastifyHttpProxy, {
      upstream: "http://localhost:5001/account",
      prefix: "/acc",
      http2: false,
    });

    proxyServer.register(fastifyHttpProxy, {
      upstream: "http://localhost:5002/communication",
      prefix: "/com",
      http2: false,
    });

    proxyServer.register(fastifyHttpProxy, {
      upstream: "http://localhost:5003/game",
      prefix: "/gam",
      http2: false,
    });

    proxyServer.register(fastifyHttpProxy, {
      upstream: "http://localhost:5004/match",
      prefix: "/mat",
      http2: false,
    });

    proxyServer.register(fastifyHttpProxy, {
      upstream: "http://localhost:5005/monster",
      prefix: "/mon",
      http2: false,
    });

    await proxyServer.listen({ port }, errorHandler);
  } catch (e) {
    console.error(e);
  }
};

process.on("unhandledRejection", (e) => {
  console.error(e);
  process.exit(1);
});

startProxyServer();
