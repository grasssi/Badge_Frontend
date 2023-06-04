import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EfccmService {
 // user!: UserModel;    
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { 
  }
  found(body: any) {
    // console.log('bodyuu11',body.efccm.length)
    // console.log('bodyuu11',body.efccm)
    //    body.efccm = "380023210022TOC 0       0       0       111115"
    //     console.log('bodyuu22',body.efccm.length)
    //     console.log('bodyuu22',body.efccm)
    return this.httpClient.post(`${this.baseUrl}/foundefccm`,body)
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
