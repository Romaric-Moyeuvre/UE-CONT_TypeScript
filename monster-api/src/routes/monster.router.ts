import { FastifyInstance } from "fastify";
import { buyMonster, delMonster, moveTo } from "../schemas/monster.schema";
import * as controllers from "../controllers";
async function monsterRouter(fastify: FastifyInstance) {
    fastify.route({
      method: "GET",
      url: "/",
      handler: controllers.welcome,
    });
    fastify.route({
      method: "GET",
      url: "/store",
      handler: controllers.showMonsters,
    });
    fastify.route({
      method: "GET",
      url: "/store/:monsterid",
      handler: controllers.showMonster,
    });
    fastify.route({
      method: "PUT",
      url: "/store/buy",
      schema: buyMonster,
      handler: controllers.buyMonster,
    });
    fastify.route({
      method: "PUT",
      url: "/inventory/del",
      schema: delMonster,
      handler: controllers.delMonster,
    });
    fastify.route({
      method: "PUT",
      url: "/management/toTeam",
      schema: moveTo,
      handler: controllers.moveToTeam,
    });
    fastify.route({
      method: "PUT",
      url: "/management/toStock",
      schema: moveTo,
      handler: controllers.moveToStock,
    });
    
  }
  export default monsterRouter;