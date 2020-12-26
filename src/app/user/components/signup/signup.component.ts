import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {LoginViewModel, User} from '../../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [''],
      password: [''],
      name: ['']
    });
  }

  get form(): User {
    return this.formGroup.value;
  }

  onSignUp() {
    this.userService.doSignUp(this.form).subscribe(x => {
      this.openSnackBar('Registered successful');
      this.router.navigate(['login']);
    }, error => {
      this.openSnackBar(error.error);
    });
  }

  openSnackBar(message: string = ' Something went wrong') {
    this.snackBar.open(message);
  }
}
