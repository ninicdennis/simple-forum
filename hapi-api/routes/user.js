const userRoutes = [
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
         var foo = {foo:'bar'}
         return foo
      }
   },
   {
      method: 'GET',
      path: '/user',
      handler: (request, h) => {
         var meme = {this:'meme'}
         return meme
      }
   }
]

module.exports = userRoutes