import { FastifyInstance } from "fastify";
import { joinOpenMatch, proceedRound } from "../schemas/match.schema";
import * as controllers from "../controllers";
async function matchRouter(fastify: FastifyInstance) {
    fastify.route({
      method: "GET",
      url: "/",
      handler: controllers.welcome,
    });
    fastify.route({
      method: "POST",
      url: "/open-match",
      handler: controllers.newOpenMatch,
    });
    fastify.route({
      method: "GET",
      url: "/open-match",
      handler: controllers.seeOpenMatch,
    });
    fastify.route({
      method: "PUT",
      url: "/open-match",
      schema: joinOpenMatch,
      handler: controllers.joinOpenMatch,
    });
    fastify.route({
      method: "GET",
      url: "/watch/match",
      handler: controllers.seeMatchInfo,
    });
    fastify.route({
      method: "GET",
      url: "/watch/match/:round",
      handler: controllers.seeRoundInfo,
    });
    fastify.route({
      method: "POST",
      url: "/proceed-round",
      schema: proceedRound,
      handler: controllers.proceedRound,
    });
    fastify.route({
      method: "GET",
      url: "/watch/match/all",
      handler: controllers.seeAllMatches,
    });
  }
  export default matchRouter;