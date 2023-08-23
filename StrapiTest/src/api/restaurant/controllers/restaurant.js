'use strict';

/**
 * restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({strapi}) => ({
  async getRestaurantName(ctx) {
    const results = await strapi
      .service("api::restaurant.restaurant")
      .getRestaurantName();

    ctx.response.body = results;
  }
}));
