import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(user => {
      console.log('User changed!', user);
    })
  }

  ngOnInit() {
    this.authService.login('anastasios.theodosiou@gmail.com', 'theodosiou91alex').subscribe(user => {
      console.log("LOGED IN USER:", user);
    }, error => {
      console.error(error);
    })
  }

}
