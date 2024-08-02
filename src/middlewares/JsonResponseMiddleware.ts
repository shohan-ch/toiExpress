import { NextFunction, Request, Response } from "express";
import JsonReponse from "../lib/JsonReponse";
import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";

@Middleware({ type: "before" })
export class JsonResponseMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): void {
    JsonReponse.setResponse(response);
    next();
  }
}
