
exports.up = function(knex, Promise) {
   return knex.schema.createTable('thread_comments', function(table) {
      table.increments('thread_id');
      table.string('comment_id').notNullable();
      table.string('user_comment').notNullable();
      table.string('username').notNullable();
    })
  
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('thread_comments')

};
