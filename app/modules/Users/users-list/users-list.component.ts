import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ColumnMode } from "@swimlane/ngx-datatable";
import Swal from "sweetalert2";
import { usersService } from "../users.service";
import { User } from "../user.model";
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})


export class UsersListComponent implements OnInit {

  public usersArray: any;
  public ColumnMode = ColumnMode;
  public dataLoaded: boolean = false;
  public selectedUser: any;
 
  p: number;
  totalItems: any;
  statesArray: any[];
  states: any[] = [];

  currentIndex: any;

 
  constructor(
    private _userService: usersService,
    private modalService: NgbModal,
  ) {
    
  }

  async ngOnInit() {
    this.getAllUsersData(1);
  }

  

  
 
 

  // modal Open Srolling Long Content Inside
  modalOpenSLCIM(modalSLCIM:any, row:any) {
    this.modalService.open(modalSLCIM, { scrollable: true });
    if(row){
      this.selectedUser = row
    }else{
      this.selectedUser = {
        id:null,
        email:null,
        job:null
      }
    }
  }

  successMessage() {
    Swal.fire({
      title: "Submitted Successfully!",
      icon: "success",
      showConfirmButton: false,
      allowOutsideClick: true,
      timer: 1500,
    });
  }

  errorMessage() {
    Swal.fire({
      title: "Oops! Error!",
      icon: "warning",
      showConfirmButton: false,
      allowOutsideClick: true,
      timer: 1500,
    });
  }

  defaultImg: string[] = []
  getAllUsersData(pagNumber:number) {
    this.dataLoaded = false;

    return this._userService.getUsers(pagNumber).subscribe(
      (response:any) => {
        this.usersArray = response.data;
        this.totalItems = response.total;
        this.p = response.page;
        this.dataLoaded = true;
      },
      (erro:any) => {
        this.dataLoaded = true;
      }
    );
  }

  onSave(){
    if(this.selectedUser.id){
      this._userService.updateUser(this.selectedUser).subscribe(
        (response:any) => {
          this.successMessage();
          this.getAllUsersData(1);
        },
        (erro:any) => {
          this.errorMessage();
          this.dataLoaded = true;
        }
      );
    }else{
      this._userService.createUser(this.selectedUser).subscribe(
        (response:any) => {
          this.successMessage();
          this.getAllUsersData(1);
        },
        (erro:any) => {
          this.errorMessage();
          this.dataLoaded = true;
        }
      );
    }
  }

  // Confirmation Message On Delete
  ConfirmTextOpen(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ml-1",
      },
    }).then((reslut) => {
      if (reslut.isConfirmed) {
        this.deleteUserById(id);
      }
    });
  }

  deleteUserById(id: string) {
    return this._userService.deleteUser(id).subscribe(
      (resp:any) => {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: ``,
          showConfirmButton: false,
          timer: 2000,
        }).then((result) => {
          this.p = 1;
          this.getAllUsersData(this.p);
        });
      },
      (erro:any) => {
        console.log(erro)
        this.errorMessage();
        this.dataLoaded = true;
      }
    );
  }
}
