'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.
    createTable('paths', function (t) {
      t.increments('id');
      t.text('curator').notNullable();
      t.text('curator_org');
      t.specificType('collaborators', 'text[]');
      t.text('name').notNullable();
      t.text('description');
      t.text('summary');
      t.text('version').notNullable();
      t.text('license');
      t.text('image_url');
      t.specificType('asset_urls', 'text[]');
      t.specificType('keywords', 'text[]');
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('paths');
};
