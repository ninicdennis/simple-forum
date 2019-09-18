
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('thread_table').del()
    .then(function () {
      // This is generic seed data I created for testing.
      return knex('thread_table').insert([
        {thread_id: '1310a8ea-0df2-41c9-aa39-4e6b4f3f4363' , title: 'Test Title', body: 'Test Body!', date_created: '07/03/1999',user_created: 'mehopuzic123'},
      ]);
    });
};
