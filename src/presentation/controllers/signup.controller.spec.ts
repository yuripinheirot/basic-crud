import { MissingParamsError } from '../errors'
import { HttpRequest } from '../protocols'
import { Validations, Validation } from '../validations'
import { SignUpController } from './signup.controller'

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
