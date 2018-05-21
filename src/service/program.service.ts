import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Program } from '../model/program.model';
 
@Injectable()
export class ProgramService {
 
    private programRef = this.db.list<Program>('programs');
    
 
    constructor(private db: AngularFireDatabase) { }
 
    getPrograms() {
        return this.programRef;
    }
 
    addProgram(program: Program) {
        return this.programRef.push(program);
    }
 
    updateProgram(program: Program) {
        return this.programRef.update(program.key, program);
    }
 
    removeProgram(program: Program) {
        return this.programRef.remove(program.key);
    }
}