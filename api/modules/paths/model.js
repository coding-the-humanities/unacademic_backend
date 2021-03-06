const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'paths',
  places: function(){
    return this.hasMany(require('../path-places/model'));
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
    'summary',
    'resources',
    'image_url',
    'asset_urls',
    'version',
    'keywords'
  ],
  dependents: ['paths']
};

module.exports = BaseModel.extend(instanceProps, classProps);
