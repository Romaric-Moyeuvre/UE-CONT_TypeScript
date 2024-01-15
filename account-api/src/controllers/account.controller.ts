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
  reply.send({ data: "Welcome to the account API" });
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
  const temp1 = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT email FROM users WHERE email = ${db.param(request.body.email.trim())}`.run(pool);
  const temp2 = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT username FROM users WHERE username = ${db.param(request.body.username.trim())}`.run(pool);
  if (temp1.length != 0) {
    reply.send({
      code: 400,
      message: "email already used",
    });
  } else {
    if (temp2.length != 0) {
      reply.send({
        code: 400,
        message: "username already used",
      });
    } else {
      await db.sql<s.users.SQL,s.users.Insertable[]>`INSERT INTO users (username, email, birthdate, password, role, status) VALUES 
      (${db.param(request.body.username)},
      ${db.param(request.body.email)},
      ${db.param(request.body.birthdate)},
      ${db.param(request.body.password)},
      ${db.param(request.body.role)},
      'active')`.run(pool);
      if (request.body.role == "player") {
        const temp3 = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT id FROM users WHERE username = ${db.param(request.body.username.trim())}`.run(pool);
        await db.sql<s.users.SQL,s.users.Insertable[]>`INSERT INTO players (id, level, money, wins, losses) VALUES (${db.param(temp3[0].id)},0, 0, 0, 0)`.run(pool);
      }
      reply.send({ 
        code: 200, 
        message: "success"
      });
    }
  }
};

export const signIn = async (
  request: FastifyRequest<{ 
    Body: { 
      username: string; 
      password: string;
    };
  }>,
  reply: FastifyReply
) => {
  const temp = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT id, role, status FROM users WHERE username = ${db.param(request.body.username)} AND password = ${db.param(request.body.password)}`.run(pool);
  if (temp.length != 1) {
    reply.send({
      code: 400,
      message: "username or password incorrect"
    });
  } else {
    if (temp[0].status == "active") {
      reply.send({
        code: 200,
        message: "success",
        content: jwt.sign({ id: temp[0].id, role: temp[0].role }, privateKey, {expiresIn: "24h",}),
      });
    } else {
      const enddate = new Date(temp[0].status); const now = new Date();
      if (now > enddate) {
        await db.sql<s.users.SQL,s.users.Updatable[]>`UPDATE users SET role = 'active' WHERE username = ${db.param(request.body.username)}`.run(pool);
        reply.send({
          code: 200,
          message: "success",
          content: jwt.sign({ id: temp[0].id, role:  temp[0].role }, privateKey, {expiresIn: "24h",}),
        });
      } else {
        reply.send({
          code: 400,
          message: "username or passsword incorrect",
        });
      }
    }
  }
};

export const getProfile = async (
  request: FastifyRequest<{ 
    Headers: {
      token: string
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  const temp1 = await db.sql<s.users.SQL,s.users.Selectable[]>`SELECT username, email, birthdate, role FROM users WHERE id = ${db.param(token.id)}`.run(pool);
  if (temp1.length != 1) {
    reply.send({
      code: 400,
      message: "profile not found"
    });
  } else {
    if (temp1[0].role == "player") {
      const temp2 = await db.sql<s.players.SQL,s.players.Selectable[]>`SELECT id, level, money, wins, losses FROM players WHERE id = ${db.param(token.id)}`.run(pool);
      reply.send({
        code: 200,
        message: "success",
        content: {
          username: temp1[0].username,
          email: temp1[0].email,
          birthdate: temp1[0].birthdate,
          level: temp2[0].level,
          money: temp2[0].money,
          wins: temp2[0].wins,
          losses: temp2[0].losses,
        },
      });
    } else {
      reply.send({
        code: 200,
        message: "success",
        content: {
          username: temp1[0].username,
          email: temp1[0].email,
          birthdate: temp1[0].birthdate,
        },
      });
    }
  }
};

export const changePassword = async (
  request: FastifyRequest<{
    Body: { 
      newpassword: string; 
      confirmnewpassword: string 
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  if (request.body.newpassword == request.body.confirmnewpassword) {
    const temp = await db.sql<s.users.SQL,s.users.Updatable[]>`UPDATE users SET password = ${db.param(request.body.newpassword)} WHERE id = ${db.param(token.id)}`.run(pool);
    reply.send({ 
      code: 200,
       message: "success",
    });
  } else {
    reply.send({
      code: 400,
      message: "password does not correspond to each other",
    });
  }
};

export const changeUsername = async (
  request: FastifyRequest<{
    Body: { 
      newusername: string 
    };
    Headers: { 
      token: string
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  await db.sql<s.users.SQL,s.users.Updatable[]>`UPDATE users SET username = ${db.param(request.body.newusername)} WHERE id = ${db.param(token.id)}`.run(pool);
  reply.send({ 
    code: 200, 
    message: "success",
  });
};

export const banUser = async (
  request: FastifyRequest<{
    Body: { 
      username: string; 
      duration: number 
    };
    Headers: { 
      token: string 
    };
  }>,
  reply: FastifyReply
) => {
  const token = jwt.verify(request.headers.token, privateKey) as TokenInfo;
  if (token.role == "admin") {
    const date = new Date(); date.setDate(date.getDate() + request.body.duration);
    await db.sql<s.users.SQL,s.users.Updatable[]>`UPDATE users SET status = ${db.param(date.toLocaleDateString())} WHERE username = ${db.param(request.body.username)}`.run(pool);
    reply.send({ 
      code: 200, 
      message: "success",
    });
  } else {
    reply.send({ 
      code: 400, 
      message: "permission not granted",
    });
  }
};

export const unbanUser = async (
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
  if (token.role == "admin") {
    await db.sql<s.users.SQL,s.users.Updatable[]>`UPDATE users SET status = 'active' WHERE username = ${db.param(request.body.username)}`.run(pool);
    reply.send({ 
      code: 200, 
      message: "success",
    });
  } else {
    reply.send({ 
      code: 400, 
      message: "permission not granted",
    });
  }
};
