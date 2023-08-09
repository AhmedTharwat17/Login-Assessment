import { NgModule } from "@angular/core";
import { ErrorComponent } from "./error.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


const routes = [
  {
    path: "",
    component: ErrorComponent
    // canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/pages/error", //Error 404 - Page not found
  },
];

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ErrorModule {}