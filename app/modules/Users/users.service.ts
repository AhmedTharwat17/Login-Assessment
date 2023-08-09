import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class usersService {
  baseUrl = environment.apiBaseUrl + "users/";

  constructor(private http: HttpClient) {}

  getUsers(pagNumber:number) {
    return this.http.get(this.baseUrl + `?page=${pagNumber}`);
  }

  

  getUserById(id: string) {
    return this.http.get(this.baseUrl + id);
  }

  createUser(user:any) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user:any) {
    return this.http.put(this.baseUrl, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + id);
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.getUserById(route.params.id);
  }
}
