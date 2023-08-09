import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "Users",
  loadChildren: () =>
    import("./modules/Users/users.module").then(
      (m) => m.UsersModule
    ),
  // canActivate: [AuthGuard],
},
{
  path: "Home",
  loadChildren: () =>
    import("./modules/Home/home.module").then(
      (m) => m.HomeModule
    ),
},
{
  path: "Contact",
  loadChildren: () =>
    import("./modules/Contact-Us/contact.module").then(
      (m) => m.ContactModule
    ),
  
},
{
  path: "About",
  loadChildren: () =>
    import("./modules/About-Us/about.module").then(
      (m) => m.AboutModule
    ),
},
{
  path: "Pages",
  loadChildren: () =>
    import("./pages/pages.module").then(
      (m) => m.PagesModule
    ),
},
{
  path: "",
  redirectTo: "/Home",
  pathMatch: "full",
},
{
  path: "**",
  redirectTo: "/Pages/error", // Error 404 - Page not found
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
