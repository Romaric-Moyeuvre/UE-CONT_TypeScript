import S from "fluent-json-schema";

export const emptySchema = {
  body: S.object(),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};