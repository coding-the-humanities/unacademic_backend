'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.
    createTable('place_resources', function (t) {
      t.increments('id');
      t.text('notes');
      t.text('piep_id').notNullable();
      t.integer('place_id').references('id').inTable('places').notNullable();
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('place_resources');
};
