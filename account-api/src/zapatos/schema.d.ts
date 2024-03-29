/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2023 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **players**
   * - Table in database
   */
  export namespace players {
    export type Table = 'players';
    export interface Selectable {
      /**
      * **players.id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      id: number;
      /**
      * **players.level**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      level: number;
      /**
      * **players.money**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      money: number;
      /**
      * **players.wins**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      wins: number;
      /**
      * **players.losses**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      losses: number;
    }
    export interface JSONSelectable {
      /**
      * **players.id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      id: number;
      /**
      * **players.level**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      level: number;
      /**
      * **players.money**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      money: number;
      /**
      * **players.wins**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      wins: number;
      /**
      * **players.losses**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      losses: number;
    }
    export interface Whereable {
      /**
      * **players.id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **players.level**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      level?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **players.money**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      money?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **players.wins**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      wins?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **players.losses**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      losses?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **players.id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      id: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **players.level**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      level: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **players.money**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      money: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **players.wins**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      wins: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **players.losses**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      losses: number | db.Parameter<number> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **players.id**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **players.level**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      level?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **players.money**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      money?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **players.wins**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      wins?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **players.losses**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      losses?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
    }
    export type UniqueIndex = 'players_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **users**
   * - Table in database
   */
  export namespace users {
    export type Table = 'users';
    export interface Selectable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id: number;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username: string;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.birthdate**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      birthdate: Date;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password: string;
      /**
      * **users.role**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      role: string;
      /**
      * **users.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status: string;
    }
    export interface JSONSelectable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id: number;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username: string;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **users.birthdate**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      birthdate: db.DateString;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password: string;
      /**
      * **users.role**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      role: string;
      /**
      * **users.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status: string;
    }
    export interface Whereable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.birthdate**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      birthdate?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.role**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      role?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **users.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.birthdate**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      birthdate: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.role**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      role: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **users.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **users.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('users_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **users.username**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      username?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.email**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.birthdate**
      * - `date` in database
      * - `NOT NULL`, no default
      */
      birthdate?: (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment | db.SQLFragment<any, (db.DateString | Date) | db.Parameter<(db.DateString | Date)> | db.SQLFragment>;
      /**
      * **users.password**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      password?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.role**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      role?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **users.status**
      * - `varchar` in database
      * - `NOT NULL`, no default
      */
      status?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'users_id_key';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = players.Table | users.Table;
    export type Selectable = players.Selectable | users.Selectable;
    export type JSONSelectable = players.JSONSelectable | users.JSONSelectable;
    export type Whereable = players.Whereable | users.Whereable;
    export type Insertable = players.Insertable | users.Insertable;
    export type Updatable = players.Updatable | users.Updatable;
    export type UniqueIndex = players.UniqueIndex | users.UniqueIndex;
    export type Column = players.Column | users.Column;
  
    export type AllBaseTables = [players.Table, users.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [players.Table, users.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "players": players.Selectable;
    "users": users.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "players": players.JSONSelectable;
    "users": users.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "players": players.Whereable;
    "users": users.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "players": players.Insertable;
    "users": users.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "players": players.Updatable;
    "users": users.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "players": players.UniqueIndex;
    "users": users.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "players": players.Column;
    "users": users.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "players": players.SQL;
    "users": users.SQL;
  }[T];

}
