import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { takeUntil, first, take } from "rxjs/operators";
import { Subject } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class  LoginComponent implements OnInit {
  
 //  Public
 public coreConfig: any;
 public loginForm: FormGroup;
 public loading = false;
 public submitted = false;
 public returnUrl: string;
 public error = "";
 public passwordTextType: boolean;

 // Private
 private _unsubscribeAll: Subject<any>;

 /**
  * Constructor
  *
  * @param {CoreConfigService} _coreConfigService
  */
 constructor(
   private _formBuilder: FormBuilder,
   private _route: ActivatedRoute,
   private _router: Router,
   private _authenticationService: AuthenticationService,
 ) {
   // redirect to home if already logged in
   if (this._authenticationService.currentUserValue) {
    
     this._router.navigate(["/Users/list"]);
   }

   this._unsubscribeAll = new Subject();

 }

 // convenience getter for easy access to form fields
 get f() {
   return this.loginForm.controls;
 }

 /**
  * Toggle password
  */
 togglePasswordTextType() {
   this.passwordTextType = !this.passwordTextType;
 }

 onSubmit() {
   this.submitted = true;
   // stop here if form is invalid
   if (this.loginForm.invalid) {
     return;
   }

   // Login
   this.loading = true;

 

   
       this._authenticationService
         .login(this.f.email.value, this.f.password.value)
         .pipe(first(), takeUntil(this._unsubscribeAll))
         .subscribe(
           async (data) => {
             this._router.navigate([this.returnUrl]);
           },
           (error) => {
             if (
               error === "You are not Authenticated" ||
               error === "This user is not authenticated"
             ) {
               this.error = "Invalid username or password";
             }
             this.loading = false;
           }
         );
  
 }

 // Lifecycle Hooks
 // -----------------------------------------------------------------------------------------------------

 /**
  * On init
  */
 ngOnInit(): void {
   this.loginForm = this._formBuilder.group({
     email: ["", [Validators.required, Validators.email]],
     password: ["", Validators.required],
   });

   // get return url from route parameters or default to '/'
   this.returnUrl = this._route.snapshot.queryParams["returnUrl"] || "/";

   
 }

 /**
  * On destroy
  */
 ngOnDestroy(): void {
   // Unsubscribe from all subscriptions
   this._unsubscribeAll.next();
   this._unsubscribeAll.complete();
 }
}
