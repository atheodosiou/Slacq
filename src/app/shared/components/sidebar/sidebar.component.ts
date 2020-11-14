import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private rest:RestService) { }

  ngOnInit() {
  }

}
