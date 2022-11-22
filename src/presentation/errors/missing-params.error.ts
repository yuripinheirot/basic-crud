export class MissingParamsError extends Error {
  constructor(private readonly missingParamsList: string[]) {
    super()
    this.message = `Required fields are not provided: ${this.missingParamsList.join(', ')}`
    this.name = 'MissingParamsError'
  }
}
