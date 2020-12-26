import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {LoginViewModel} from '../../model/user';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  get form(): LoginViewModel {
    return this.formGroup.value;
  }

  onLogin() {
    this.userService.doLogin(this.form).subscribe(x => {
      console.log('Login successful', x);
      this.openSnackBar('Login successful');
      this.router.navigate(['news', 'list']);
    }, error => {
      this.openSnackBar(error.error);
    });
  }

  openSnackBar(message: string = ' Something went wrong') {
    this.snackBar.open(message);
  }
}
