
exports.up = function(knex, Promise) {
   return knex.schema.createTable('thread_table', function(table) {
      table.string('thread_id').notNullable();
      table.string('title').notNullable();
      table.string('body', 100000).notNullable();
      table.string('date_created').notNullable();
      table.string('user_created').notNullable();
    })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('thread_table')
};
