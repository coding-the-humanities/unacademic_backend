const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'places',
  resources: function(){
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
    'resources',
    'image_url',
    'asset_urls',
    'version',
    'keywords'
  ],
  dependents: ['path_places']
};

module.exports = BaseModel.extend(instanceProps, classProps);
