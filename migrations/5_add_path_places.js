'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.
    createTable('path_places', function (t) {
      t.increments('id');
      t.text('notes');
      t.text('piep_id').notNullable();
      t.integer('path_id').references('id').inTable('paths').notNullable();
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('path_places');
};
