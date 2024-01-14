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
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<
    s.monsters.SQL,
    s.monsters.Selectable[]
  >`SELECT * FROM monsters`.run(pool);
  reply.send({ data: temp });
};

export const showMonster = async (
  request: FastifyRequest<{
    Params: { monsterid: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<
    s.monsters.SQL,
    s.monsters.Selectable[]
  >`SELECT * FROM monsters WHERE id = ${db.param(
    request.params.monsterid
  )}`.run(pool);
  if (temp.length != 1) {
    reply.send({ data: "wrong request" });
  } else {
    reply.send({ data: temp[0] });
  }
};

export const buyMonster = async (
  request: FastifyRequest<{
    Body: { monsterid: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<
    s.monsters.SQL,
    s.monsters.Selectable[]
  >`SELECT * FROM monsters WHERE id = ${db.param(request.body.monsterid)}`.run(
    pool
  );
  if (temp.length != 1) {
    reply.send({ data: "wrong request" });
  } else {
    let id = temp[0].id;
    let cost = temp[0].cost;
    const temp2 = await db.sql<
      s.players.SQL,
      s.players.Selectable[]
    >`SELECT * FROM players WHERE id = ${db.param(token.id)}`.run(pool);
    if (temp2.length != 1) {
      reply.send({ data: "wrong request" });
    } else {
      if (temp2[0].money < cost) {
        reply.send({ data: "too poor" });
      } else {
        await db.sql<
          s.possession_monsters.SQL,
          s.possession_monsters.Insertable[]
        >`
        INSERT INTO possession_monsters VALUES (${db.param(
          token.id
        )},${db.param(request.body.monsterid)},1,false)`.run(pool);
        await db.sql<
          s.possession_monsters.SQL,
          s.possession_monsters.Updatable[]
        >`
        UPDATE players SET money = ${db.param(temp2[0].money - cost)}`.run(
          pool
        );
        reply.send({ data: temp[0] });
      }
    }
  }
};

export const delMonster = async (
  request: FastifyRequest<{
    Body: { monsterid: number; monsterlvl: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  await db.sql<
    s.possession_monsters.SQL,
    s.possession_monsters.Updatable[]
  >`DELETE FROM possession_monsters WHERE id_player = ${db.param(
    token.id
  )} AND id_monster = ${db.param(
    request.body.monsterid
  )} AND level = ${db.param(request.body.monsterlvl)}`.run(pool);
  reply.send({ data: "done" });
};

export const moveToTeam = async (
  request: FastifyRequest<{
    Body: { monsterid: number; monsterlvl: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  await db.sql<s.possession_monsters.SQL, s.possession_monsters.Updatable[]>`
  UPDATE possession_monsters SET team = true WHERE id_player = ${db.param(
    token.id
  )} AND id_monster = ${db.param(
    request.body.monsterid
  )} AND level = ${db.param(request.body.monsterlvl)} AND team = false`.run(
    pool
  );
  reply.send({ data: "done" });
};
export const moveToStock = async (
  request: FastifyRequest<{
    Body: { monsterid: number; monsterlvl: number };
    Headers: { token: string };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  await db.sql<s.possession_monsters.SQL, s.possession_monsters.Updatable[]>`
  UPDATE possession_monsters SET team = false WHERE id_player = ${db.param(
    token.id
  )} AND id_monster = ${db.param(
    request.body.monsterid
  )} AND level = ${db.param(request.body.monsterlvl)} AND team = true`.run(
    pool
  );
  reply.send({ data: "done" });
};
