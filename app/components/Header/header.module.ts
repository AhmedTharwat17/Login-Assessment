import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    RouterModule,
    CommonModule 
  ],
  exports: [HeaderComponent],
  providers: [],
})

export class HeaderModule {}
