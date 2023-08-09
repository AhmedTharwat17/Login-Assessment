import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes = [
  {
    path: "",
    component: LoginComponent
    // canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/pages/error", //Error 404 - Page not found
  },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {}