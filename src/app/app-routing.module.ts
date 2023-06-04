import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EfccmComponent } from './efccm/efccm.component';
import { BadgeComponent } from './badge/badge.component';

const routes: Routes = [
  {
    path: 'efccm',component: EfccmComponent
  },
  {
    path: 'badge',component: BadgeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Routes } from '@angular/router';
// import { EfccmComponent } from './efccm/efccm.component';


// export const routes: Routes = [

//   {
//     path: 'efccm',component: EfccmComponent
//   },

// ];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }
