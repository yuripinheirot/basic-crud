import { MissingParamsError } from '../errors'
import { Controller, HttpRequest, HttpResponse } from '../protocols'

export class SignUpController implements Controller {
  constructor() {}

  handle = async (httpRequest: HttpRequest): Promise<HttpResponse> => {
    try {
      const { email, password, passwordConfirmation } = httpRequest.body
      const requiredFields = ['email', 'password', 'passwordConfirmation']
      const requiredFieldsNotProvided = []

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          requiredFieldsNotProvided.push(field)
        }
      }

      if (requiredFieldsNotProvided.length) {
        throw new MissingParamsError(requiredFieldsNotProvided)
      }

      return new Promise<HttpResponse>((resolve) =>
        resolve({ statusCode: 200, body: httpRequest.body })
      )
    } catch (error) {
      return {
        statusCode: 400,
        body: error,
      }
    }
  }
}
