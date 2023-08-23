'use strict';

/**
 * restaurant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant.restaurant', (({strapi}) => ({
  async getRestaurantName() {
    // @ts-ignore
    const { results } = await super.find({ filters: { name: { $contains: "McDonald" } } });
    return results.map( r => r.name);
  },
})));
