import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changedPassword: string | undefined;
  newPassword: any;
  Value?: string;
  password!: string;
  
  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  editPassword(password?: string){
    this.newPassword.Value = this.password;
    this.changedPassword = password;
   // return password || '';
    alert('Done');
}
}
