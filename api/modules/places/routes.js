const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/places': [
        controller.findMany,
        controller.serialize
      ],
      '/places/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/places':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/places/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/places/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});
