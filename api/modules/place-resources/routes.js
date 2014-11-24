const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('../../vendor/endpoints/router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/place-resources': [
        controller.findMany,
        controller.serialize
      ],
      '/place-resources/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/place-resources':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/place-resources/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/place-resources/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});
