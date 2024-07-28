import Blog from '#models/blog'
import { createBlogValidator } from '#validators/blog'
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

  async createBlog({ request, response }: HttpContext) {
    const { blogTitle, blogMessage, blogLikes, numBlogComments } =
      await request.validateUsing(createBlogValidator)

    let blog = await Blog.query().where('title', blogTitle).first()

    if (!blog) {
      blog = new Blog()
      blog.blogTitle = blogTitle
      blog.blogMessage = blogMessage
      blog.blogLikes = blogLikes
      blog.numBlogComments = numBlogComments
      await blog.save()

      return response.created({
        status: 'Created',
        message: 'Created Blog successfully',
        statusCode: 201,
      })
    } else {
      return response.conflict({
        status: 'Conflict',
        statusCode: 409,
        message: 'Election already exists',
      })
    }
  }
}
