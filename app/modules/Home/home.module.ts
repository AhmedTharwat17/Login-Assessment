import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


const routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "/Pages/error", //Error 404 - Page not found
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}