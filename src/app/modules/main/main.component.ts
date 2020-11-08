import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  menuItes: MenuItem[] = [
    { 
      label: 'Channels',
      items:[
        {label:'Channel 1'},
        {label:'Channel 2'},
        {label:'Channel 3'},
        {label:'Channel 4'}
      ] 
    },
    { label: 'Direct Messages' }
  ]
  ngOnInit() {
  }

}
