export type HttpRequest = {
  body?: any
}

export type HttpResponse = {
  statusCode: number
  body: any
}

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}

export class MissingParamsError extends Error {
  constructor(private readonly missingParamsList: string[]) {
    super()
    this.message = `Required fields are not provided: ${this.missingParamsList.join(', ')}`
    this.name = 'MissingParamsError'
  }
}

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error,
  }
}

export class SignUpController implements Controller {
  handle = async (httpRequest: HttpRequest): Promise<HttpResponse> => {
    const { email, password, passwordConfirmation } = httpRequest.body
    const requiredFields = ['email', 'password', 'passwordConfirmation']
    const requiredFieldsNotProvided = []

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        requiredFieldsNotProvided.push(field)
      }
    }

    if (requiredFieldsNotProvided.length) {
      return badRequest(new MissingParamsError(requiredFieldsNotProvided))
    }

    return new Promise<HttpResponse>((resolve) =>
      resolve({ statusCode: 200, body: httpRequest.body })
    )
  }
}

const mockHttpRequest: HttpRequest = {
  body: {
    email: 'test@mail.com',
    password: '123',
    passwordConfirmation: '123',
  },
}

const makeSut = () => {
  const sut = new SignUpController()

  return {
    sut,
  }
}

describe('Presentation :: Controllers :: SignUp', () => {
  test('Should return httpResponse with statusCode and httpRequest in body', async () => {
    const { sut } = makeSut()
    const result = await sut.handle(mockHttpRequest)

    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual(mockHttpRequest.body)
  })

  test('Should return status 400 if required fields is no provided', async () => {
    const { sut } = makeSut()
    const httpRequestStub: HttpRequest = {
      body: {
        email: 'test@mail.com',
      },
    }
    const result = await sut.handle(httpRequestStub)

    expect(result.statusCode).toBe(400)
    expect(result.body).toEqual(new MissingParamsError(['password', 'passwordConfirmation']))
  })
})
