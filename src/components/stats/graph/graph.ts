import { Component, ViewChild } from '@angular/core';

import {  Events} from 'ionic-angular';
import { WorkoutService } from '../../../service/workout.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFireList } from 'angularfire2/database';
import { Workout } from '../../../model/workout.model';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';

/**
 * Generated class for the GraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'graph',
  templateUrl: 'graph.html'
})
export class GraphComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  exercises :Observable<Workout[]>;

  
  
  constructor(
    private ev: Events,
    private workoutService : WorkoutService,
      ) {

       };

  ngOnInit(){
    console.log("test");
    this.eventListener();
    this.exercises=  this.workoutService.getWorkouts().snapshotChanges().pipe(map(
      changes => {
        console.log("chch ch changes");
        
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
          
          
        }))
      }))
    console.log("this exercicicses",JSON.stringify(this.exercises))
  }
  ngOnDestroy(){
    this.ev.unsubscribe('addToGraphs');

    
    console.log("unsubscribed events")
  }
  eventListener(){
    
    this.ev.subscribe('addToGraph', data => {
      let graphData = [];
      console.log("data1", data, "  ", )
      
      
      this.exercises.forEach(element => {
        console.log("foreach")
        element.forEach(element => {
          
          if(element.name ==data){
            console.log("datas ",data, "   asd", element.maxWeight)
            graphData.push(element.maxWeight);
            console.log(element.maxWeight, graphData)
            
            
          }
          
        });
        
        this.update(graphData)
        
        
      
      });
      
      
    })
    
  
    


    
  }
  

  
      
  public lineChartData:Array<any> = [
    
    {data: [100], label: ' 2'},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'poop', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        console.log("j",j,"i",i,"  ", this.lineChartData[i].data[j])
      }
    }
    this.lineChartData = _lineChartData;
  }

  public update(graphdata):void {
    console.log(this.chart.datasets, "this.chart.datasets")
    this.chart.datasets.push( {data: graphdata, label: 'newgraph'});
    //this.chart.chart.update();
    (<any>this.chart).refresh()
    
    
  }
  
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

}
