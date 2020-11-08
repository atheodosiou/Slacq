import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.scss']
})
export class MessageEditorComponent implements OnInit {

  constructor() { }
  message:string="";
  ngOnInit() {
  }

  emojiSelect(event){
    console.log(event.emoji.native);
    this.message+=event.emoji.native;
  }
}
