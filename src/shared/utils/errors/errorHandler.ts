export default class ErrorHandler extends Error {

  readonly statusCode: number

  constructor(statusCode = 400, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}
