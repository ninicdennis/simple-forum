var knex = require('../knexfile')

const userRoutes = [
   {
      method: 'GET',
      path: '/postthread',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         return 'Hello from /postthread'
      }
   },
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

   }


]

module.exports = userRoutes