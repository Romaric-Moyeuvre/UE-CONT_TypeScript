import S from "fluent-json-schema";

export const emptySchema = {
  body: S.object(),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const sendMessage = {
  body: S.object().prop("message", S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const sendInvite = {
  body: S.object().prop("username", S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const acceptInvite = {
  body: S.object().prop("username", S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};
