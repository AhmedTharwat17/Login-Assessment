import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthenticationService } from "../pages/services/authentication.service";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  /**
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _toastrService: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        console.log(err)
        const error = err.error?.Message || err.error.error;
        if (
          [401, 403].indexOf(err.status) === -1 &&
          error !== "There is no data has been found." &&
          error !== "You are not Authenticated" &&
          error !== "This user is not authenticated"
        ) {
          let updatedError = error.split("SeverityError ");

          Swal.fire({
            title: "Oops! Something Went Wrong.",
            html: `<span class=''>An error occured while trying to perform this action. </br>please contact support team. </span></br><span style='font-size: 0.85rem; margin: 2rem 2rem 0rem 2rem; ' class="text-danger d-block">ERR REF: ${
              updatedError[1] ? updatedError : error
            }</span> `,

            // text: `${updatedError[1] ? updatedError : error}`,
            showConfirmButton: false,
            allowOutsideClick: true,
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-gradient-primary mx-1",
              cancelButton: "btn btn-outline-primary mx-1",
              footer: "text-muted text-center",
              title: "mb-1 text-primary",
            },
          })

    
        }
        return throwError(error);
      })
    );
  }
}
