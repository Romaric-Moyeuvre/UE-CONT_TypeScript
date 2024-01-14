import S from "fluent-json-schema";

export const emptySchema = {
  body: S.object(),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const newSkirmish = {
  body: S.object()
  .prop('difficulty',S.number().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const joinOpenMatch = {
  body: S.object().prop("otheruser", S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const proceedRound = {
  body: S.object()
    .prop("p1_id", S.number().required())
    .prop("p1_monster_id", S.number().required())
    .prop("p1_monster_lvl", S.number().required())
    .prop("p2_id", S.number().required())
    .prop("p2_monster_id", S.number().required())
    .prop("p2_monster_lvl", S.number().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};
