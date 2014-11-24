const BaseModel = require('../vendor/endpoints/model')({
  Bookshelf: require('./database'),
  Validator: require('./validator')
});

module.exports = BaseModel;
