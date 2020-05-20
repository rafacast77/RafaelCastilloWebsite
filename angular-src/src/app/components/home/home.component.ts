import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  constructor(public authService:AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(About => {
      this.user = About.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
