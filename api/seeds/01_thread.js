
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('thread_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('thread_table').insert([
        {thread_id: 1 , title: 'foo', body: 'bar', date_created: '07/03/1999',user_created: 'mehopuzic123'},
      ]);
    });
};
