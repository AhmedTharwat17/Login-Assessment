import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { LocalStorageUser } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseUrl = environment.apiBaseUrl + "admin/user/logout/";
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) { }

  /**
   * Get all users
   */
  getAll() {
    return this._http.get<LocalStorageUser[]>(`${environment.apiBaseUrl}/admin/users`);
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<LocalStorageUser>(`${environment.apiBaseUrl}/admin/users/${id}`);
  }
  logout(userId: string) {
    let params = new HttpParams();
    if (userId) {
      params = params.append("userId", userId);
    }
    return this._http.get<any>(this.baseUrl, {
      params: params
    });
  }
}
