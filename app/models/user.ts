import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { v4 as uuid } from 'uuid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare middleName: string

  @column()
  declare lastName: string

  @column()
  declare email: string

  @column()
  declare gender: string

  @column()
  declare phoneNumber: string

  @column()
  declare dateOfBirth: string

  @column()
  declare nationality: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare isActive: boolean

  @column()
  declare isDefaultPassword: boolean

  @column()
  declare isVerified: boolean

  @column({ serializeAs: null })
  declare verificationCode: string | null

  @column.dateTime({ serializeAs: null })
  declare verificationCodeSentAt: DateTime

  @column({ serializeAs: null })
  declare isDeleted: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)

  @beforeCreate()
  static assignUuid(user: User) {
    user.id = uuid()
  }
}
