import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ProgPage } from '../prog/prog';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { SignupPage } from '../signup/signup';
import { ProgramService } from '../../service/program.service';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController,
              private auth: AuthService,
              private programService: ProgramService,
		          fb: FormBuilder) {
                programService.getPrograms();
              this.loginForm = fb.group({
                 email: ['', Validators.compose([Validators.required, Validators.email])],
                 password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
              });
            
   

  }
  
login() {
  let data = this.loginForm.value;


  if (!data.email) {
    return;
  }
  

  let credentials = {
    email: data.email,
    password: data.password
  };
  this.auth.signInWithEmail(credentials)
    .then(
      () => this.navCtrl.setRoot(ProgPage),
      error => this.loginError = error.message
    );
}
signup(){
  this.navCtrl.push(SignupPage);
}

loginWithGoogle() {
  this.auth.signInWithGoogle()
    .then(
      () => this.navCtrl.setRoot(ProgPage),
      error => console.log(error.message)
    );
}






  goToPrograms(){
    this.navCtrl.push(ProgPage)
  }
}
