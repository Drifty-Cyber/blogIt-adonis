import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Blog extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare blogTitle: string

  @column()
  declare blogMessage: string

  @column()
  declare blogLikes: number

  @column()
  declare blogComments: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
