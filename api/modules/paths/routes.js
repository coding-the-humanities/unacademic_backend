const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/paths': [
        controller.findMany,
        controller.serialize
      ],
      '/paths/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/paths':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/paths/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/paths/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});
