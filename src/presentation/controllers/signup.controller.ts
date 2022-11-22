import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { MissingParamsErrorValidation, Validations } from '../validations'

export class SignUpController implements Controller {
  constructor(private readonly validations: Validations) {}

  handle = async (httpRequest: HttpRequest): Promise<HttpResponse> => {
    this.validations.execute([
      new MissingParamsErrorValidation(['email', 'password', 'passwordConfirmation'], httpRequest),
    ])

    const { email, password, passwordConfirmation } = httpRequest.body

    return new Promise<HttpResponse>((resolve) =>
      resolve({ statusCode: 200, body: httpRequest.body })
    )
  }
}
