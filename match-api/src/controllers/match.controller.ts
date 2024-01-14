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
    reply.send({ data: "Welcome to the match API" });
  });
};

export const newOpenMatch = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "newOpenMatch not implemented" });
  });
};

export const seeOpenMatch = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "seeOpenMatch not implemented" });
  });
};

export const joinOpenMatch = async (
  request: FastifyRequest<{
    Params: { otheruser: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "joinOpenMatch not implemented" });
  });
};

export const seeMatchInfo = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "seeMatchInfo not implemented" });
  });
};

export const seeRoundInfo = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "seeRoundInfo not implemented" });
  });
};

export const proceedRound = async (
  request: FastifyRequest<{
    body: {
      p1_id: number;
      p1_monster_id: number;
      p1_monster_lvl: number;
      p2_id: number;
      p2_monster_id: number;
      p2_monster_lvl: number;
    };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "proceedRound not implemented" });
  });
};

export const seeAllMatches = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "seeAllMatches not implemented" });
  });
}; //admin only
