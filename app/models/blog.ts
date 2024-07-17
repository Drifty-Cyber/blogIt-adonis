import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'

export default class Blog extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare blogTitle: string

  @column()
  declare blogMessage: string

  @column()
  declare blogLikes: number

  @column()
  declare numBlogComments: number

  @column({ serializeAs: null })
  declare isDeleted: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeCreate()
  static assignUuid(blog: Blog) {
    blog.id = uuid()
  }
}
