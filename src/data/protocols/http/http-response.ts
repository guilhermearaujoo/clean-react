export enum HttpStatusCode {
  badRequest = 400,
  noContent = 204,
  ok = 200,
  unauthorized = 401,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};
