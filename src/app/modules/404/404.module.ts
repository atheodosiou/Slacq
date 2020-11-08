import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:NotFoundComponent
    }])
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
