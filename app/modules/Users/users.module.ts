import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "./users-list/users-list.component"; 

import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPaginationModule } from "ngx-pagination";
// import { BlockUIModule } from "ng-block-ui";
import { AuthGuard } from "src/app/helpers/auth.guards";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "list",
    component: UsersListComponent,
    canActivate: [AuthGuard],
  },
  
  {
    path: "**",
    redirectTo: "/Pages/error", //Error 404 - Page not found
  },
];

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgxDatatableModule,
    NgxPaginationModule,
    FormsModule
    // BlockUIModule.forRoot(),
  ],
})
export class UsersModule {}