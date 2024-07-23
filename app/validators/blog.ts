import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new blog.
 */
export const createBlogValidator = vine.compile(
  vine.object({
    blogTitle: vine.string().trim(),
    blogMessage: vine.string().trim().escape(),
    blogLikes: vine.number(),
    numBlogComments: vine.number(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing blog.
 */
export const updateBlogValidator = vine.compile(vine.object({}))
