import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AppData {
  base: string,
  service: string,
  domaine: string,
  fonction: string,
  interne: string,
  version: string,
  horsres: string,
  nbutilisateur: string,
  application: string,
  situation: string
}
export interface TableData extends Array<AppData> { }
@Injectable({
  providedIn: 'root'
})
export class EfccmService {
  // user!: UserModel;    
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }
  found(body: any) {
    return this.httpClient.post(`${this.baseUrl}/foundefccm`, body)
  }

  addefccm(body: any){
    return this.httpClient.post(`${this.baseUrl}/addeffcm`, body)
  
  }
  allefccm(){
    return this.httpClient.get(`${this.baseUrl}/alleffcms`)
  }








  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
