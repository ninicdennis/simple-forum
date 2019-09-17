
exports.up = function(knex, Promise) {
   return knex.schema.createTable('thread_table', function(table) {
      table.increments('thread_id');
      table.string('title').notNullable();
      table.string('body').notNullable();
      table.string('date_created').notNullable();
      table.string('user_created');
    })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('thread_table')
};
