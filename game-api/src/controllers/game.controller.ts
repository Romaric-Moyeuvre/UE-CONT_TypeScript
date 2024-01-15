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
  reply.send({ data: "Welcome to the game API" });
};

export const getGameInfo = async (
  request: FastifyRequest<{ 
    Headers: { 
      token: string 
    } 
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  if (token.role == "admin" || token.role == "viewer") {
    const stats = await db.sql<s.stats.SQL,s.stats.Selectable[]>`SELECT * FROM stats`.run(pool);
    const players = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT * FROM users JOIN players ON users.id = players.id WHERE role = 'player'`.run(pool);
    reply.send({ 
      code: 200, 
      message: "success",
      content: {
        stats: stats, 
        players: players 
      }
    });
  } else {
    reply.send({
      code: 400, 
      message: "permission not granted" 
    });
  }
};

export const getPlayerList = async (
  request: FastifyRequest<{ 
    Headers: { 
      token: string 
    } 
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const players = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT username, level, money, wins, losses FROM users JOIN players ON users.id = players.id WHERE role = 'player'`.run(pool);
  reply.send({ 
    code: 200, 
    message: "success",
    content: players, 
  });
};

export const getPlayerInfo = async (
  request: FastifyRequest<{
    Params: { 
      username: string 
    };
    Headers: { 
      token: string 
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  if (token.role == "admin") {
    const temp = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT * FROM users JOIN players ON users.id = players.id WHERE role = 'player' and username = ${db.param(request.params.username)}`.run(pool);
    if (temp.length == 1) {
      reply.send({ 
        code: 200, 
        message: "success",
        content: temp, 
      });
    } else {
      reply.send({ 
        code: 400, 
        message: "user not found"
      });
    }
  } else {
    const temp = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT username, level, money, wins, losses FROM users JOIN players ON users.id = players.id WHERE role = 'player' and username = ${db.param(request.params.username)}`.run(pool);
    if (temp.length == 1) {
      reply.send({ 
        code: 200, 
        message: "success",
        content: temp,
      });
    } else {
      reply.send({ 
        code: 400, 
        message: "user not found" 
      });
    }
  }
};
