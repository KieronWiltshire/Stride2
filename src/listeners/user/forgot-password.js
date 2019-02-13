'use strict';

import UserAPI from '~/api/user';
import {default as createDebugger} from 'debug';

/**
 * Debugger
 */
const debug = createDebugger(UserAPI.getConfig().get('app.name') + ':' + 'listeners:user:forgot-password');

/**
 * Listener
 */
export default (async function({ user }) {
  UserAPI.sendPasswordResetToken({ user }).catch(debug);
});
