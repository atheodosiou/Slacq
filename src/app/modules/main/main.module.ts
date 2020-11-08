import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChatComponent } from 'src/app/shared/components/chat/chat.component';
import { AccordionModule } from 'primeng/accordion';
import {PanelMenuModule} from 'primeng/panelmenu';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
const primeModules = [
  // ButtonModule,
  // AccordionModule
  // PanelMenuModule
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MainComponent
    }]),
    ...primeModules
  ],
  declarations: [
    MainComponent,
    ToolbarComponent,
    SidebarComponent,
    ChatComponent
  ]
})
export class MainModule { }
