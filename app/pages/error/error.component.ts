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


@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class  ErrorComponent implements OnInit, OnDestroy {
  
  constructor(
    private _router: Router,
  ) {
   
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
