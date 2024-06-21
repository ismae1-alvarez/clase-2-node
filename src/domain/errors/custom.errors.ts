export class CustomError extends Error{

    constructor(
      public readonly message: string,
      public readonly status: number
    ) {
      super(message) //hacer ejecucion del Error porque estamos heredando de otra clase Error
    }
  
    static badRequest(message: string ) {
      return new CustomError(message, 400)
    }
  
    static unAuthorized(message: string) {
      return new CustomError(message, 401)
    }
  
    static notFound(message: string) {
      return new CustomError(message, 404)
    }
  
    static internalServerError(message: string) {
      return new CustomError(message, 500)
    }
  }