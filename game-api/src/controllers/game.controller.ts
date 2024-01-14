import { FastifyReply, FastifyRequest } from "fastify";

import { TokenInfo } from "interfaces";

import type * as s from "zapatos/schema";
import * as db from "zapatos/db";
import pool from "../db/pgPool";

import jwt from "jsonwebtoken";

const privateKey = "pDzVEE8qLQ9VL2m"

export const welcome = async (request: FastifyRequest<{}>, reply: FastifyReply) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "Welcome to the game API" });
  });
};

export const getGameInfo = async (request: FastifyRequest<{Headers:{token:string}}>, reply: FastifyReply) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "getGameInfo not implemented" });
  });
};
// Only for viewer and admin

export const getPlayerList = async (request: FastifyRequest<{Headers:{token:string}}>, reply: FastifyReply) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "getPlayerList not implemented" });
  });
};

export const getPlayerInfo = async (request: FastifyRequest<{Params:{username:string},Headers:{token:string}}>, reply: FastifyReply) => {
  Promise.resolve([]).then(() => {
    reply.send({ data: "getPlayerInfo not implemented" });
  });
};
// If player : normal info
// If admin : more info