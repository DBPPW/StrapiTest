module.exports = (plugin) => {
  plugin.controllers.users.newOneMethod = (ctx) => {
    console.log('I\'m new method.');
  };

  plugin.routes['content-api'].routes.push({
    method: 'GET',
    path: '/users/newOneMethod',
    handler: 'users.newOneMethod',
    config: {
      auth: false
    }
  });

  return plugin;

};
