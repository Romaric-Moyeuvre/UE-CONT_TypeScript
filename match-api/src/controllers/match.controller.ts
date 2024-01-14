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
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  if (token.role == "player") {
    let now = new Date();
    await db.sql<
      s.matches.SQL,
      s.matches.Insertable
    >`INSERT INTO matches (player1, player2, date_creation, round, status) VALUES (${db.param(
      token.id
    )},${db.param(0)},${db.param(now)},${db.param(0)},${db.param("open")})`.run(
      pool
    );
    reply.send({ code: "200", message: "new open match created" });
  } else {
    reply.send({ error: "400", message: "permission not granted" });
  }
};

export const seeOpenMatch = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<
    s.matches.SQL,
    s.matches.Selectable
  >`SELECT (username, date_creation, matches.status) FROM matches JOIN users ON users.id = matches.player1 WHERE matches.status = 'open'`.run(
    pool
  );
  reply.send({ code: "200", message: temp });
};

export const joinOpenMatch = async (
  request: FastifyRequest<{
    Body: { otheruser: string };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<
    s.matches.SQL,
    s.matches.Selectable[]
  >`SELECT matches.player1 FROM matches JOIN users ON users.id = matches.player1 WHERE matches.status = 'open' AND username = ${db.param(
    request.body.otheruser
  )}`.run(pool);
  if (temp.length == 1) {
    await db.sql<
      s.matches.SQL,
      s.matches.Updatable[]
    >`UPDATE matches SET status = 'start', player2 = ${db.param(
      token.id
    )} WHERE status = 'open' AND player1 = ${db.param(temp[0].player1)}`.run(pool);
    reply.send({ code: "200", message: "match accepted" });
  } else {
    reply.send({ error: "400", message: "no match found" });
  }
};

export const proceedRound = async (
  request: FastifyRequest<{
    Body: {
      p1_id: number;
      p1_monster_id: number;
      p1_monster_lvl: number;
      p2_id: number;
      p2_monster_id: number;
      p2_monster_lvl: number;
    }
  }>,
  reply: FastifyReply
) => {
  // HERE, CALCULATE THE OUTCOME OF THE FIGHT
  reply.send({
    match_result: {
      player_1_creature: { hp: 0, status: "dead" },
      player_2_creature: { hp: 1, status: "alive" },
    },
  });
};

export const seeAllMatches = async (
  request: FastifyRequest<{ Headers: { token: string } }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  if (token.role == "admin") {
    const temp = await db.sql<
      s.matches.SQL,
      s.matches.Selectable
    >`SELECT * FROM matches ORDER BY status`.run(pool);
    reply.send({ code: "200", message: temp });
  } else {
    reply.send({ error: "400", message: "permission not granted" });
  }
};
