import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


const routes = [
  {
    path: "",
    component: AboutComponent
  },
  {
    path: "**",
    redirectTo: "/Pages/error", //Error 404 - Page not found
  },
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})

export class AboutModule {}