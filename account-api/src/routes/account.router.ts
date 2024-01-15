import { FastifyInstance } from "fastify";
import { signIn, signUp, changePassword, changeUsername, banUser, unbanUser } from "../schemas/account.schema";
import * as controllers from "../controllers";
async function accountRouter(fastify: FastifyInstance) {
  fastify.route({
    method: "GET",
    url: "/",
    handler: controllers.welcome,
  });
  fastify.route({
    method: "POST",
    url: "/sign-up",
    schema: signUp,
    handler: controllers.signUp,
  });
  fastify.route({
    method: "POST",
    url: "/sign-in",
    schema: signIn,
    handler: controllers.signIn,
  });
  fastify.route({
    method: "GET",
    url: "/profile",
    handler: controllers.getProfile,
  });
  fastify.route({
    method: "POST",
    url: "/update/password",
    schema: changePassword,
    handler: controllers.changePassword,
  });
  fastify.route({
    method: "POST",
    url: "/update/username",
    schema: changeUsername,
    handler: controllers.changeUsername,
  });
  fastify.route({
    method: "POST",
    url: "/ban",
    schema: banUser,
    handler: controllers.banUser,
  });
  fastify.route({
    method: "POST",
    url: "/unban",
    schema: unbanUser,
    handler: controllers.unbanUser,
  });
}
export default accountRouter;
