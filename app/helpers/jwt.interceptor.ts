import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { AuthenticationService } from "../pages/services/authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  /**
   *
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _authenticationService: AuthenticationService) {}

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = this._authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    const apiUrl = environment.apiBaseUrl;
    const isApiUrl = request.url.startsWith(apiUrl);
    if (
      isLoggedIn &&
      isApiUrl
    ) {
      request = request.clone({
        headers: request.headers
          .set("Access-Control-Allow-Origin", "*")
          .set("Authorization", `Bearer ${currentUser.token}`),
      });
    }

    return next.handle(request);
  }
}
