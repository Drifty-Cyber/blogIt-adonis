import Blog from '#models/blog'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'blog_seeders'

  async up() {
    await Blog.createMany([
      {
        blogTitle: 'My Blog',
        blogMessage: 'qwertyuiop',
        blogLikes: 2,
        numBlogComments: 4,
      },
      {
        blogTitle: 'Tech Trends 2024',
        blogMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        blogLikes: 10,
        numBlogComments: 6,
      },
      {
        blogTitle: 'A Day in the Life of a Developer',
        blogMessage: 'Curabitur vel felis nec nulla auctor congue.',
        blogLikes: 5,
        numBlogComments: 3,
      },
      {
        blogTitle: 'Understanding JavaScript Closures',
        blogMessage:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.',
        blogLikes: 8,
        numBlogComments: 2,
      },
      {
        blogTitle: 'Exploring the New Features of CSS',
        blogMessage: 'Fusce lacinia urna at arcu interdum, at sollicitudin justo pretium.',
        blogLikes: 7,
        numBlogComments: 5,
      },
      {
        blogTitle: 'The Future of AI in Healthcare',
        blogMessage: 'Nunc euismod, nulla quis scelerisque fermentum, nisl mauris hendrerit purus.',
        blogLikes: 12,
        numBlogComments: 7,
      },
      {
        blogTitle: 'How to Build Responsive Websites',
        blogMessage: 'Aliquam erat volutpat. Mauris eget vehicula sapien.',
        blogLikes: 9,
        numBlogComments: 4,
      },
      {
        blogTitle: 'The Importance of Cybersecurity',
        blogMessage: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
        blogLikes: 11,
        numBlogComments: 6,
      },
      {
        blogTitle: 'Learning C# for Beginners',
        blogMessage: 'Vivamus blandit aliquet ligula, id laoreet lectus faucibus non.',
        blogLikes: 4,
        numBlogComments: 1,
      },
      {
        blogTitle: 'Effective Project Management Tips',
        blogMessage: 'Integer ut dui nec elit sagittis varius non nec justo.',
        blogLikes: 6,
        numBlogComments: 3,
      },
      {
        blogTitle: 'The Rise of Cloud Computing',
        blogMessage:
          'Sed malesuada ligula in fermentum tempor. Aenean eget nisi nec urna dictum hendrerit.',
        blogLikes: 15,
        numBlogComments: 8,
      },
    ])
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
