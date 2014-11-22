const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'paths',
  places: function(){
    return this.hasMany(require('../places/model'));
  }
};

var classProps = {
  fields: [
    'id',
    'curator',
    'curator_org',
    'contributors',
    'name',
    'description',
    'resources',
    'image_url',
    'asset_urls',
    'version',
    'keywords'
  ],
  dependents: ['paths']
};

module.exports = BaseModel.extend(instanceProps, classProps);
