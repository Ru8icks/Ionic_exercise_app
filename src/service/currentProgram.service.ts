import { Injectable } from '@angular/core';
import { Program } from './../model/program.model'
import { BehaviorSubject } from 'rxjs';
 
@Injectable()
export class CurrentProgramService {
     
    program: Program = {
        title:'',
        content: [],
      } 
      
      private messageSource = new BehaviorSubject('{"content":[],"title":""}');
      currentProgram = this.messageSource.asObservable();
      

    constructor() {
        
    }
  
    changetProgram(program: string) {
        this.messageSource.next(program)
               
    }
    
}
 