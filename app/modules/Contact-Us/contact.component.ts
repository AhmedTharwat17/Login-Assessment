import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

import { Router } from "@angular/router";


@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class  ContactComponent implements OnInit, OnDestroy {
  
  constructor(
    private _router: Router,
  ) {
   
  }






 




 
  async ngOnInit() {
    

  }


  ngOnDestroy(): void {
   
  }
}
