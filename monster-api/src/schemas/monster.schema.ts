import S from "fluent-json-schema";

export const emptySchema = {
  body: S.object(),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const buyMonster = {
    body: S.object()
    .prop('monsterid',S.number().required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
  };

export const delMonster = {
    body: S.object()
    .prop('monsterid',S.number().required())
    .prop('monsterlvl',S.number().required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
  };

  export const moveTo = {
    body: S.object()
    .prop('monsterid',S.number().required())
    .prop('monsterlvl',S.number().required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
  };