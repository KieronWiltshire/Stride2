'use strict';

import BaseError from '../base-error';

export default class InternalServerError extends BaseError {

  /**
   * Create a InternalServerError response
   *
   * @returns {Object} error
   */
  constructor() {
    super();
    this.type = 'InternalServerError';
    this.status = 500;
    this.message = 'An internal server error occured';
  }

}
