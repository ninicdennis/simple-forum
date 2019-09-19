var knex = require('../knex')

const userRoutes = [
   {
      method: 'POST',
      path: '/postthread',
      handler: (request, h) => {
         const { title, body, date_created, thread_id, user_created} = request.payload
         const newThread = {
            title, body, date_created, thread_id, user_created
         }
         console.log(newThread)
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         var response = knex('thread_table').insert(newThread)

         return response

      }
   },
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
         var response = knex.select().table('thread_table').timeout(1000)
         console.log(response)
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         return response
      }
   },
   {
      method: 'DELETE',
      path: '/thread/{id}',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         console.log(request.payload)
         var response = knex('thread_table').del().where('thread_id',request.payload)
         return response
      }
   },
   {
      method: 'GET',
      path: '/thread/{id}',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         console.log('Getting information from Thread: ', request.params.id)
         var response = knex('thread_table').where('thread_id', request.params.id)
         return response
      }

   },
   {
      method: 'GET',
      path: '/threadcomment/{id}',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         console.log('Getting information from Thread: ', request.params.id)
         var response = knex('thread_comments').where('thread_id', request.params.id)
         return response
      }

   },
   {
      method: 'POST',
      path: '/postreply',
      handler: (request, h) => {
         console.log(request.payload)
         const { thread_id , comment_id , user_comment, username} = request.payload
         const threadReply = {
            thread_id, comment_id, user_comment, username
         }
         console.log(threadReply)
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         var response = knex('thread_comments').insert(threadReply)
         return response

      }
   },
   {
      method: 'DELETE',
      path: '/deletecomment',
      handler: (request, h) => {
         console.log(request.payload)
         const {comment_id} = request.payload
         var response = knex('thread_comments').where('comment_id', comment_id).del()
         return response
      }
   }


]

module.exports = userRoutes