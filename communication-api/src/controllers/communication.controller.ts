import { FastifyReply, FastifyRequest } from "fastify";

import { TokenInfo } from "interfaces";

import type * as s from "zapatos/schema";
import * as db from "zapatos/db";
import pool from "../db/pgPool";

import jwt from "jsonwebtoken";

const privateKey = "pDzVEE8qLQ9VL2m";

export const welcome = async (
  request: FastifyRequest<{}>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "Welcome to the communication API" });
  });
};

export const sendMessage = async (
  request: FastifyRequest<{
    Params: { username: string };
    Body: { message: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "sendMessage not implemented" });
  });
};
export const seeMessages = async (
  request: FastifyRequest<{
    Params: { username: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "seeMessages not implemented" });
  });
};
export const sendInvite = async (
  request: FastifyRequest<{
    Body: { username: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "sendInvite not implemented" });
  });
};
export const seeInvites = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "seeInvites not implemented" });
  });
};
export const acceptInvite = async (
  request: FastifyRequest<{
    Body: { username: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "acceptInvite not implemented" });
  });
};
