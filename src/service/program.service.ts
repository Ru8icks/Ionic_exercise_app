
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Program } from '../model/program.model';
import { AngularFireAuth } from 'angularfire2/auth';
 
@Injectable()
export class ProgramService {
 
    private programRef = this.db.list<Program>('programs');
    
    programs: AngularFireList<Program>;
    userId: string;
    
 
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if(user) this.userId = user.uid
            console.log("userid is set")
            this.programs = this.db.list<Program>(`programs/${this.userId}`);
            
          })
     }
 
    getPrograms() {    
        if (!this.userId) {
            console.log("!this.userId just happened")
            return;
        } 
        this.programs = this.db.list<Program>(`programs/${this.userId}`);
        return this.programs
    }
    
 
    addProgram(program: Program) {
        return this.programs.push(program);
    }
 
    updateProgram(program: Program) {
        return this.programs.update(program.key, program);
    }
 
    removeProgram(program: Program) {
        console.log("service "+program.key)
        return this.programs.remove(program.key);
    }
}