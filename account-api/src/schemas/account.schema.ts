import S from "fluent-json-schema";

export const emptySchema = {
  body: S.object(),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const signUp = {
  body: S.object()
  .prop('username',S.string().required())
  .prop('email',S.string().required())
  .prop('birthdate',S.string().required())
  .prop('password',S.string().required())
  .prop('role',S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const signIn = {
  body: S.object()
  .prop('username',S.string().required())
  .prop('password',S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const changePassword = {
  body: S.object()
  .prop('username',S.string().required())
  .prop('newpassword',S.string().required())
  .prop('confirmnewpassword',S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const changeUsername = {
  body: S.object()
  .prop('newusername',S.string().required()),
    queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const banUser = {
  body: S.object()
  .prop('username',S.string().required())
  .prop('duration',S.number().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};

export const unbanUser = {
  body: S.object()
  .prop('username',S.string().required()),
  queryString: S.object(),
  params: S.object(),
  headers: S.object(),
};
