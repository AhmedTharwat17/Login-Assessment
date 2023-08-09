import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { LocalStorageUser } from "../models";
import { ToastrService } from "ngx-toastr";

import { UserService } from "./user-auth.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  //public
  public currentUser: Observable<LocalStorageUser>;


  //private
  public currentUserSubject: BehaviorSubject<LocalStorageUser | any>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService,
    private _userService: UserService,
    private _router: Router,
  ) {
    const userJson = sessionStorage.getItem('currentUser');
    var currentSesstion = userJson !== null ? JSON.parse(userJson) : null;
    this.currentUserSubject = new BehaviorSubject<LocalStorageUser>(
      currentSesstion
    );
   
    this.currentUser = this.currentUserSubject.asObservable();
    
  }

  // getter: currentUserValue
  public get currentUserValue(): LocalStorageUser {
    return this.currentUserSubject.value;
  }

  

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    const encodedPassword = encodeURIComponent(password);
    let url = `${environment.apiBaseUrl}login`
   
    return (
      this._http
        .post<any>(
          url,
          {
            "email":email,
            "password":encodedPassword,
          }
        )
        .pipe(
          map((response:any) => {
            const user: LocalStorageUser = response;
           

            // login successful if there's a jwt token in the response
            if (user && user.token) {
              sessionStorage.setItem("currentUser", JSON.stringify(user));
              
              // Display welcome toast!
              setTimeout(() => {
                this._toastrService.success(
                  "You have successfully logged in",
                  "👋 Welcome",
                );
              }, 2500);
              this._router.navigate(["/Users/list"]).then(()=>{
                this._toastrService.success(
                  "You have successfully logged in",
                  "👋 Welcome",
                );
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
                
              });
              
              // notify
              this.currentUserSubject.next(user);
            }

            return user;
          })
        )
    );
  }

  logout() {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("newUserToken");
    sessionStorage.removeItem("newUserRefreshToken");
    sessionStorage.removeItem("charts");
    // notify
    this.currentUserSubject.next(null);
  }
}
