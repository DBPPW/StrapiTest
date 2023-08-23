'use strict';

/**
 * restaurant router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/restaurant/getRestaurantName',
      handler: 'restaurant.getRestaurantName',
    },
  ]
}
