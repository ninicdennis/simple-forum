exports.seed = function(knex) {
  // Deletes ALL existing entries 
  return knex('thread_comments').del()
    .then(function () {
      // This is generic seed data I created for testing.
      return knex('thread_comments').insert([
        {thread_id: '1310a8ea-0df2-41c9-aa39-4e6b4f3f4363' , comment_id: 'be587511-53a7-41fe-9449-a5dc13c6822a' , user_comment: 'Test Comment', username: 'mehopuzic123'},
      ]);
    });
};
