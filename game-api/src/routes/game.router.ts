import { FastifyInstance } from "fastify";
import { emptySchema } from "../schemas/game.schema";
import * as controllers from "../controllers";
async function gameRouter(fastify: FastifyInstance) {
    fastify.route({
      method: "GET",
      url: "/",
      handler: controllers.welcome,
    });
    fastify.route({
      method: "GET",
      url: "/info",
      handler: controllers.getGameInfo,
    });
    fastify.route({
      method: "GET",
      url: "/info/players",
      handler: controllers.getPlayerList,
    });
    fastify.route({
      method: "GET",
      url: "/info/:username",
      handler: controllers.getPlayerInfo,
    });
  }
  export default gameRouter;