'use strict';

import path from 'path';

/**
 * Database configuration
 */

var options = {};

/**
 * Database's host
 *
 * The database's host address.
 */
options['host'] = process.env.DB_HOST || '127.0.0.1';

/**
 * Database's port
 *
 * The database's port.
 */
options['port'] = process.env.DB_PORT || 27017;

/**
 * Database's username
 *
 * The username used to access the database.
 */
options['username'] = process.env.DB_USERNAME || 'root';

/**
 * Database's password
 *
 * The password used to access the database.
 */
options['password'] = process.env.DB_PASSWORD || null;

/**
 * Database's name
 *
 * The name of the database to access.
 */
options['database'] = process.env.DB_NAME || 'testapp';

export default options;