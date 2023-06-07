import { Component, OnInit } from '@angular/core';
import { BadgeService } from '../services/badge.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EfccmService } from '../services/efccm.service';

@Component({
  selector: 'app-tableefccm',
  templateUrl: './tableefccm.component.html',
  styleUrls: ['./tableefccm.component.scss']
})
export class TableefccmComponent implements OnInit {


  myRes: any;
  efccmForm = new FormGroup({
    code_payes: new FormControl(''),
    idf_emt: new FormControl(''),
    toc: new FormControl(''),
    vcontext: new FormControl(''),
    badge: new FormControl('')
  })

  constructor(
    private router: Router,
    private badgeservice: BadgeService,
    private efccmservice: EfccmService,

  ) { }

  addEfccm(){
    this.efccmservice.addefccm(this.efccmForm.value).subscribe((response: any) => {
      // this.toasterService.pop('success', 'Success Login', response.message);
     this.router.navigate(['/efccm']);
    },
      (error: any) => {
        // this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );

  }
  allbadges() {
    this.badgeservice.allbadges().subscribe((response: any) => {
      this.myRes = response
    },
    (error: any) => {
      console.log(error);
    }
  );
  }
  ngOnInit(): void {
    this.allbadges()
  }

}
