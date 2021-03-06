'use strict';

import Config from '~/config';
import { MongoClient } from 'mongodb';
import Errors from '~/errors';
import HostRequiredCode from '~/errors/codes/database/host-required';

/**
 * Connection options
 */
export let options = {
  host: Config.get('database.host', '127.0.0.1'),
  port: Config.get('database.port', '3306'),
  user: Config.get('database.username', 'root'),
  password: Config.get('database.password', ''),
  db: Config.get('database.database', 'sntl'),
};

let connectionURL = null;

if (options.user && options.password) {
  connectionURL = (options.user + ':' + options.password);
}

if (options.host) {
  if (connectionURL) {
    connectionURL += '@' + options.host;
  } else {
    connectionURL = options.host;
  }
} else {
  throw Errors.status(500).push(HostRequiredCode);
}

if (options.port) {
  connectionURL += ':' + options.port;
}

if (options.db) {
  connectionURL += '/' + options.db;
}

/**
 * Create a mongo client.
 */
export const client = new MongoClient('mongodb://' + connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/**
 * Export mongo client.
 */
export default client;
