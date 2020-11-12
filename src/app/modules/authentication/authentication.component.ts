import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe(user => {
      console.log('User changed!', user);
    })
  }

  ngOnInit() {
    console.log('currentUserValue:', this.authService.currentUserValue)
  }

  login() {
    this.authService.login('anastasios.theodosiou@gmail.com', 'theodosiou91alex').subscribe(user => {
      this.router.navigate(['/main']);
    }, error => {
      console.error(error);
    })
  }
}
