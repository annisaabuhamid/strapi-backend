'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('cleargo-writer')
      .service('myService')
      .getWelcomeMessage();
  },
});
