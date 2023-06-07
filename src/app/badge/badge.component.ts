import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BadgeService } from '../services/badge.service';


@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {


  badgeForm = new FormGroup({
    emt: new FormControl(''),
    modele: new FormControl(''),
    code_fab: new FormControl(''),
    classe_equipement: new FormControl('')
  })

  constructor(
    private router: Router,
    private badgeservice: BadgeService,
  ) { }


  addBadge() {

    this.badgeservice.addbadge(this.badgeForm.value).subscribe((response: any) => {
      // this.toasterService.pop('success', 'Success Login', response.message);
     this.router.navigate(['/efccm']);
    },
      (error: any) => {
        // this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );


  }

  ngOnInit(): void {
  }
 
}
