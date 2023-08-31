'use strict';

/**
 * restaurant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant.restaurant', (({strapi}) => ({
  async getRestaurantName() {
    // @ts-ignore
    const { results } = await super.find();
    return results.map( r => ({ name: r.name, description: r.description }));
  },
})));
