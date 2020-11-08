import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChatComponent } from 'src/app/shared/components/chat/chat.component';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { ChatHeaderComponent } from 'src/app/shared/components/chat/subcomponents/chat-header/chat-header.component';
import { MessageEditorComponent } from 'src/app/shared/components/chat/subcomponents/message-editor/message-editor.component';
import { MessageBoxComponent } from 'src/app/shared/components/chat/subcomponents/message-box/message-box.component';
import {EditorModule} from 'primeng/editor';
import {RippleModule} from 'primeng/ripple';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';

const primeModules = [
  ButtonModule,
  EditorModule,
  RippleModule,
  OverlayPanelModule
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MainComponent
    }]),
    FormsModule,
    ...primeModules,
    PickerModule
  ],
  declarations: [
    MainComponent,
    ToolbarComponent,
    SidebarComponent,
    ChatHeaderComponent,
    MessageEditorComponent,
    MessageBoxComponent,
    ChatComponent
  ]
})
export class MainModule { }
