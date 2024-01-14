import { FastifyInstance } from "fastify";
import { sendMessage, sendInvite, acceptInvite } from "../schemas/communication.schema";
import * as controllers from "../controllers";
async function accountRouter(fastify: FastifyInstance) {
    fastify.route({
      method: "GET",
      url: "/",
      handler: controllers.welcome,
    });
    fastify.route({
      method: "POST",
      url: "/conversation/:username",
      schema: sendMessage,
      handler: controllers.sendMessage,
    });
    fastify.route({
      method: "GET",
      url: "/conversation/:username",
      handler: controllers.seeMessages,
    });
    fastify.route({
      method: "POST",
      url: "/match/invites",
      schema: sendInvite,
      handler: controllers.sendInvite,
    });
    fastify.route({
      method: "GET",
      url: "/match/invites",
      handler: controllers.seeInvites,
    });
    fastify.route({
      method: "PUT",
      url: "/match/invites",
      schema: acceptInvite,
      handler: controllers.acceptInvite,
    });
  }
  export default accountRouter;