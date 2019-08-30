const userRoutes = [
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
         var foo = {foo:'bar'}
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         return foo
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