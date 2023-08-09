import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


const routes = [
  {
    path: "",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "/Pages/error", //Error 404 - Page not found
  },
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ContactModule {}