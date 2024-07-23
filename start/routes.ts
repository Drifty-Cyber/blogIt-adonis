/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const BlogController = () => import('#controllers/blog_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('blogs', [BlogController, 'getAllBlogs'])
    router.get('blogs/:id', [BlogController, 'getBlog'])
  })
  .prefix('/api/v1')
