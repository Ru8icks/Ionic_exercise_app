import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import {  RunPage } from "../run/run";
import { CompletedRunsPage} from "../completed-runs/completed-runs";
import { ProgramsPage } from '../programs/programs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController,
              private auth: AuthService,
		          fb: FormBuilder) {
                
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
      () => this.navCtrl.setRoot(HelloIonicPage),
      error => this.loginError = error.message
    );
}
signup(){
  this.navCtrl.push(SignupPage);
}


  goToRun() {
    this.navCtrl.push(RunPage);

  }

  goToCompleted() {
    this.navCtrl.push(CompletedRunsPage);

  }
  goToPrograms(){
    this.navCtrl.push(ProgramsPage)
  }
}
