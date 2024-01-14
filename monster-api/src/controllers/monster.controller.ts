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
    reply.send({ data: "Welcome to the monster API" });
  });
};

export const showMonsters = async (
  request: FastifyRequest<{
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "showMonsters not implemented" });
  });
};

export const showMonster = async (
  request: FastifyRequest<{
    Params: { monsterid: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "showMonster not implemented" });
  });
};

export const buyMonster = async (
  request: FastifyRequest<{
    Body: { monsterid: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "buyMonster not implemented" });
  });
};

export const delMonster = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "delMonster not implemented" });
  });
};

export const moveToTeam = async (
  request: FastifyRequest<{
    Body: { monsterid: number; monsterlvl: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "moveToTeam not implemented" });
  });
};
export const moveToStock = async (
  request: FastifyRequest<{
    Body: { monsterid: number; monsterlvl: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "moveToStock not implemented" });
  });
};
