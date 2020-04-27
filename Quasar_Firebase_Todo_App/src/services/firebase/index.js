import * as base from './base.ts';
import * as login from './googleLogin.ts';
import * as db from './db.ts';

export default Object.assign({}, base, login, db);