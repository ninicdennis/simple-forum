var knex = require('../knexfile')

const userRoutes = [
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