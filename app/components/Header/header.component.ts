import {
  Component,
  OnDestroy,
  OnInit,
  HostBinding,
  HostListener,
  ViewEncapsulation,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";
import { LocalStorageUser } from "src/app/pages/models";
import { AuthenticationService } from "src/app/pages/services/authentication.service";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class  HeaderComponent implements OnInit, OnDestroy {
  public currentUser:LocalStorageUser;
  constructor(
    private _router: Router,
    private _authenticationService:AuthenticationService
  ) {
    const userJson = sessionStorage.getItem('currentUser');
    this.currentUser = userJson !== null ? JSON.parse(userJson) : null;
    console.log(this.currentUser)
  }


  logout() {
    this._authenticationService.logout();
    this._router.navigate(["/Pages/login"]);
    window.location.reload();
  }





 




  /**
   * Logout method
   */
  // logout() {
  //   this._authenticationService.logout();
  //   this._router.navigate(["/pages/authentication/login-v2"]);
  // }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  async ngOnInit() {
    

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    // this._unsubscribeAll.next();
    // this._unsubscribeAll.complete();
  }
}
