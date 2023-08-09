import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

import { Router } from "@angular/router";


@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class  AboutComponent implements OnInit, OnDestroy {
  
  constructor(
    private _router: Router,
  ) {
   
  }






 




 
  async ngOnInit() {
    

  }


  ngOnDestroy(): void {
   
  }
}
