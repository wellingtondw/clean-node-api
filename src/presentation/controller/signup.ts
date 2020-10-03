import { HttpRequest, HttpResponse}from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'

export class SignUpController {

  handle(httpRequest: HttpRequest): HttpResponse {
    const {name, email} = httpRequest.body

    if(!name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if(!email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }

    return {
      statusCode: 400,
      body: {}
    }

  }

}
