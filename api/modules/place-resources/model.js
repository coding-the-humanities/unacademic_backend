const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'place_resources',
  list: function() {
    return this.belongsTo(require('../places/model'));
  },
};

var classProps = {
  fields: [
    'id',
    'notes',
    'path_id',
    'piep_id'
  ],
  dependents: []
};

module.exports = BaseModel.extend(instanceProps, classProps);
