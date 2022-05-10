import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logo = '././assets/worldcup-logo.png'
  form : any = {
    username : null,
    password : null,
    email : null 
  };
  isSuccessful = false ;
  isSignUpFailed = false ;
  errorMessage = '' ;
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() : void
  {
    const {username , password, email } = this.form ;
    this.authService.register(username,password,email).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
