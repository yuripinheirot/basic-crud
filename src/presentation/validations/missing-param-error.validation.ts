import { MissingParamsError } from '../errors'
import { HttpRequest } from '../protocols'
import { Validation } from './validations.validation'

export class MissingParamsErrorValidation implements Validation {
  constructor(
    private readonly requiredFields: string[],
    private readonly httpRequest: HttpRequest
  ) {}
  validate = () => {
    const requiredFieldsNotProvided = []

    for (const field of this.requiredFields) {
      if (!this.httpRequest.body[field]) {
        requiredFieldsNotProvided.push(field)
      }
    }

    if (requiredFieldsNotProvided.length) {
      throw new MissingParamsError(requiredFieldsNotProvided)
    }
  }
}
