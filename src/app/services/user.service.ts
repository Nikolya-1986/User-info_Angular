import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _apiUrl = 'http://localhost:3000';

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getAllUser(): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/users`);
  };

  public getUser(id: number | any): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/user/${id}`);
  };

  public createUser(user: any): Observable<any> {
    return this._httpClient.post(`${this._apiUrl}/create`, user);
  };

  public deleteUser(id: number): Observable<any> {
    return this._httpClient.delete(`${this._apiUrl}/delete/${id}`);
  };

  public updateUser(user: any, id: number | any): Observable<any> {
    return this._httpClient.put(`${this._apiUrl}/update/${id}`, user)
  };

}
