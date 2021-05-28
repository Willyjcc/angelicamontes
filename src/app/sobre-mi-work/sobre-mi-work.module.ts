import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SobreMiWorkPage } from './sobre-mi-work.page';

const routes: Routes = [
  {
    path: '',
    component: SobreMiWorkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SobreMiWorkPage]
})
export class SobreMiWorkPageModule {}
