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
  reply.send({ data: "Welcome to the communication API" });
};

export const sendMessage = async (
  request: FastifyRequest<{
    Params: { 
      username: string 
    };
    Body: { 
      message: string 
    };
    Headers: { 
      token: string 
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT id FROM users WHERE username = ${db.param(request.params.username)}`.run(pool);
  if (temp.length != 1) {
    reply.send({ 
      code: 400, 
      message: "user not found",
    });
  } else {
    let now = new Date();
    await db.sql<s.messages.SQL, s.messages.Insertable[]>`INSERT INTO messages VALUES (${db.param(token.id)},${db.param(temp[0].id)},${db.param(now)},${db.param(request.body.message)})`.run(pool);
    reply.send({ 
      code: 200, 
      message: "success",
    });
  }
};
export const seeMessages = async (
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
  const temp = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT id FROM users WHERE username = ${db.param(request.params.username)}`.run(pool);
  if (temp.length != 1) {
    reply.send({ 
      code: 400, 
      message: "no user found",
    });
  } else {
    const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
    const temp2 = await db.sql<s.messages.SQL,s.messages.Selectable[]>`SELECT * FROM messages 
    WHERE (sender = ${db.param(temp[0].id)} AND receiver = ${db.param(token.id)}) 
    OR (sender = ${db.param(token.id)} AND receiver = ${db.param(temp[0].id)}) ORDER BY time ASC`.run(pool);
    reply.send({ 
      code: 200, 
      message: "success",
      data: temp2,
    });
  }
};
export const sendInvite = async (
  request: FastifyRequest<{
    Body: { 
      username: string 
    };
    Headers: { 
      token: string 
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT id FROM users WHERE username = ${db.param(request.body.username)}`.run(pool);
  if (temp.length != 1) {
    reply.send({ 
      code: 400,
      message: "user not found"
    });
  } else {
    let now = new Date();
    await db.sql<s.messages.SQL,s.messages.Insertable[]>`INSERT INTO messages VALUES (${db.param(token.id)},${db.param(temp[0].id)},${db.param(now)},${db.param("[MATCH INVITATION]")})`.run(pool);
    reply.send({
      code: 200, 
      data: "success"
    });
  }
};
export const seeInvites = async (
  request: FastifyRequest<{ 
    Headers: { 
      token: string 
    } 
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp = await db.sql<s.messages.SQL,s.messages.Selectable[]>`SELECT * FROM messages WHERE content = '[MATCH INVITATION]' `.run(pool);
  reply.send({ 
    code: 200, 
    message: "success",
    data: temp 
  });
};
export const acceptInvite = async (
  request: FastifyRequest<{
    Body: { 
      username: string 
    };
    Headers: { 
      token: string 
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp1 = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT id FROM users WHERE username = ${db.param(request.body.username)}`.run(pool);
  if (temp1.length != 1) {
    reply.send({ 
      code: 400,
      message: "user not found" });
  } else {
    const temp = await db.sql<s.messages.SQL,s.messages.Selectable[]>`SELECT * FROM messages WHERE sender = ${db.param(temp1[0].id)} AND receiver = ${db.param(token.id)} AND content = '[MATCH INVITATION]' `.run(pool);
    if (temp.length > 0) {
      await db.sql<s.messages.SQL, s.messages.Updatable[]>`DELETE FROM messages WHERE sender = ${db.param(temp1[0].id)} AND receiver = ${db.param(token.id)} AND content = '[MATCH INVITATION]'`.run(pool);
      reply.send({ 
        code: 200,
        message: "success" 
      });
    } else {
      reply.send({ 
        code: 400, 
        message: "no invitation found" 
      });
    }
  }
};
