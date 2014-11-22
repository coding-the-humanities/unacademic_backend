const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/path-places': [
        controller.findMany,
        controller.serialize
      ],
      '/path-places/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/path-places':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/path-places/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/path-places/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});
