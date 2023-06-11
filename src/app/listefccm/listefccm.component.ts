import { Component, OnInit } from '@angular/core';
import { EfccmService,TableData } from '../services/efccm.service';

@Component({
  selector: 'app-listefccm',
  templateUrl: './listefccm.component.html',
  styleUrls: ['./listefccm.component.scss']
})
export class ListefccmComponent implements OnInit {

  public filterQuery = '';
  error: any;
  public data: any;
  constructor(private efccmService: EfccmService) {}

  ngOnInit(): void {
    const res=this.efccmService.allefccm().subscribe(
        (data: any) => {
          setTimeout(() => {
            this.data = [...data];
            console.log(res);
            
          }, 1000);
        }, // success path
        
        error => this.error = error // error path

      );

  }

  public toInt(num: string) {
    return +num;
  }
  public sortByWordLength = (a: any) => {
    return a.Firstname.length;
  }

  public owners(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  onDelete(id: number) {
    // //with Services
    // this.efccmService.removeApplication(id).subscribe((response) => {
    //   this.ngOnInit();
    // },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}