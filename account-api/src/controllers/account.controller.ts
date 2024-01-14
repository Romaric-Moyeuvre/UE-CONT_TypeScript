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
    reply.send({ data: "Welcome to the account API" });
  });
};

export const signUp = async (
  request: FastifyRequest<{
    Body: {
      username: string;
      email: string;
      birthdate: string;
      password: string;
      role: string;
    };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "signUp not implemented" });
  });
};

export const signIn = async (
  request: FastifyRequest<{ Body: { username: string; password: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "signIn not implemented" });
  });
};

export const getInfo = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "getInfo not implemented" });
  });
};

export const changePassword = async (
  request: FastifyRequest<{
    Body: { username: string; newpassword: string; confirmnewpassword: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "changePassword not implemented" });
  });
};

export const changeUsername = async (
  request: FastifyRequest<{
    Body: { newusername: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "changeUsername not implemented" });
  });
};

export const banUser = async (
  request: FastifyRequest<{
    Body: { username: string; duration: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "banUser not implemented" });
  });
};

export const unbanUser = async (
  request: FastifyRequest<{
    Body: { username: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "unbanUser not implemented" });
  });
};
