
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Workout } from '../model/workout.model';
import { AngularFireAuth } from 'angularfire2/auth';
 
@Injectable()
export class WorkoutService {
 
   
    
    workouts: AngularFireList<Workout>;
    userId: string;
    
 
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if(user) this.userId = user.uid
            console.log("userid is set workout")
            this.workouts = this.db.list<any>(`workouts/${this.userId}`);
            
          })
     }
 
    getPrograms() {    
        if (!this.userId) {
            console.log("!this.userId just happened")
            return;
        } 
        this.workouts = this.db.list<any>(`workouts/${this.userId}`);
        return this.workouts
    }
    
 
    addProgram(workout: Workout) {
        return this.workouts.push(workout);
    }
 
    updateProgram(workout: Workout) {
        return this.workouts.update(workout.key, workout);
    }
 
    removeProgram(workout: Workout) {
        return this.workouts.remove(workout.key);
    }
}