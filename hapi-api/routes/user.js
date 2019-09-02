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
         // add if statement to check for thread_id already existing. For now I will manually change it.
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
      method: 'GET',
      path: '/user',
      handler: (request, h) => {
         var meme = {this:'meme'}
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         return meme
      }
   }

]

module.exports = userRoutes