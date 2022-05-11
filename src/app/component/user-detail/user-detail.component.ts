import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { Role } from '../../model/role';
import { RoleService } from '../../service/role.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user? : User ;
  roles? : Role[];
  chosenRole? : Role ;
  chosenRoleId? : number ;
  constructor(
    private route : ActivatedRoute,
    private location : Location,
    private userService : UserService,
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private roleService : RoleService
  ) { }

  userForm = this.formBuilder.group(
    {
      username : this.user?.username,
      email : this.user?.email,
      password : this.user?.password
    }
  ) ;
  ngOnInit(): void {
    this.getUser();
  }

  goBack() : void
  {
    this.location.back() ;
  }

  getUser() : void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  addUser(
    username: string,password : string,email: string
  ) : void
  {
    this.authService.register(username,password,email)
    .subscribe(() => this.goBack()) ;
  }



  saveUser(): void
  {
    if(this.user)
    {
      this.userService.updateUser(this.user).subscribe(
        () => this.goBack()
      );
    }
  }

  getRoles() : void
  {
    this.roleService.getRoles().subscribe(
      (response : Role[]) => {
        this.roles = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  show(): void
  {

    document.getElementById("sessionsToAdd")!.hidden = false ;
    document.getElementById("saveAdded")!.hidden = false ;

    this.getRoles();

  }

  saveRole():void
  {
    if(this.chosenRoleId)
    {
     this.user?.roles?.push(this.chosenRole!);
     this.userService.updateUser(this.user!).subscribe(
      () => this.goBack());
    }
  }

  onOptionsSelected(value : string) : void
  {
      this.chosenRoleId = parseInt(value);
      this.roleService.getRole(this.chosenRoleId).subscribe(role => this.chosenRole = role);

  }


}
