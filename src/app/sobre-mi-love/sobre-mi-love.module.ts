import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SobreMiLovePage } from './sobre-mi-love.page';

const routes: Routes = [
  {
    path: '',
    component: SobreMiLovePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SobreMiLovePage]
})
export class SobreMiLovePageModule {}
