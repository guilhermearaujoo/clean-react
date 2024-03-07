import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: any

  validate (fieldName: string, fieldValue: string): string {
    return this.errorMessage
  }
}
