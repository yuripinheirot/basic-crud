export interface Validation {
  validate: () => Promise<void> | void
}

export interface Validations {
  execute: (validation: Validation[]) => Promise<void> | void
}
