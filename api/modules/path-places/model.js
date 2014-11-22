const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'path-places',
  list: function() {
    return this.belongsTo(require('../paths/model'));
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
