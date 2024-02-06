export enum HttpStatusCode {
  badRequest = 400,
  noContent = 204,
  ok = 200,
  unathorized = 401,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: object;
};
