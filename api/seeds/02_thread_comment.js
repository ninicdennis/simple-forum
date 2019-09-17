exports.seed = function(knex) {
  // Deletes ALL existing entries 
  return knex('thread_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('thread_comments').insert([
        {thread_id: 1 , comment_id: 1 , user_comment: 'Test Comment', username: 'mehopuzic123'},
      ]);
    });
};
