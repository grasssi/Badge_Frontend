import { Component } from '@angular/core';
import { read, utils, writeFile } from 'xlsx';
import { EfccmService } from './services/efccm.service';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  efccmForm = new FormGroup({
    efccm: new FormControl('')
  })


  movies: any[] = [];
  constructor(
    private efccmservice: EfccmService,
  ) { }
  handleImport($event: any) {
    const files = $event.target.files;
    if (files.length) {

      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          this.movies = rows;

          for (let i = 0; i < this.movies.length; i++) {
            this.efccmForm.value.efccm = this.movies[i].Movie;

            this.efccmservice.found(this.efccmForm.value).subscribe((response: any) => {
              console.log(response);
              if (response == 'not found'){
                this.movies[i].Badge = 'not found';
                this.movies[i].Emetteur = 'not found';
              }else {
                this.movies[i].Badge = response.modele;
                this.movies[i].Emetteur = response.emt;
              }

            },
              (error) => {
                console.log(error);
              }
            );

          }

        }
      }
      reader.readAsArrayBuffer(file);
    }

  }

  handleExport() {
    const headings = [[
      'Movie',
      'Badges',
      'Emetteur',
      // 'Director',
      // 'Rating'
    ]];
    const wb = utils.book_new();
    const ws: any = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, this.movies, { origin: 'A2', skipHeader: true });
    utils.book_append_sheet(wb, ws, 'Report');
    writeFile(wb, 'Movie Report.xlsx');
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

