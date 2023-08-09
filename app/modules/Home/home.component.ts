import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

import { Router } from "@angular/router";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class  HomeComponent implements OnInit, OnDestroy {
  
  constructor(
    private _router: Router,
  ) {
   
  }






 




 
  async ngOnInit() {
    

  }


  ngOnDestroy(): void {
   
  }
}
