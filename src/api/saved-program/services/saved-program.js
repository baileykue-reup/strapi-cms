'use strict';

/**
 * saved-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saved-program.saved-program');
