import Api from '@/api'
import { MessageDetails } from '@/types/types.ts'

export default class Message {
  id!: number
  email!: string
  name!: string
  body!: string

  errors!: string[]

  static async createMessage(messageDetails: MessageDetails) {
    const message: Message = await Api.createMessage(messageDetails)
    return message
  }
}
