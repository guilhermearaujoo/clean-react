import { faker } from '@faker-js/faker'
import { HttpPostParams } from '../protocols/http'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: { test: faker.string.alphanumeric(10) }
})
