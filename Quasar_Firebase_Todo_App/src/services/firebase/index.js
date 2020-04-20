import * as base from './base.js';
import * as login from './googleLogin.js';
import * as db from './db.js';

export default Object.assign({}, base, login, db);