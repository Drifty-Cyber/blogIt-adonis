import Blog from '#models/blog'
import type { HttpContext } from '@adonisjs/core/http'

export default class BlogController {
  async getAllBlogs({ response }: HttpContext) {
    const blogs = await Blog.query().where('isDeleted', false).orderBy('createdAt', 'desc')

    return response.ok({
      status: 'Success',
      message: 'Fetched Blogs successfully',
      statusCode: 200,
      results: blogs,
    })
  }

  async getBlog({ params: { id }, response }: HttpContext) {
    // console.log(id)
    const blog = await Blog.query().where('id', id)

    return response.ok({
      status: 'Success',
      message: 'Fetched Blog successfully',
      statusCode: 200,
      results: blog,
    })
  }
}
