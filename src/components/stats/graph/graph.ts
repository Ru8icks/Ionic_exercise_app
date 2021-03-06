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
  private series:boolean = true; 

  
  
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
      let graphDataX = [];
      let graphDataY = [];
      let graphData = [];
      console.log("data1", data, "  ", )
      
      
      this.exercises.forEach(element => {
        console.log("foreach")
        element.forEach(element => {
          
          if(element.name ==data){
            console.log("datas ",data, "   asd", element.maxWeight)
            graphDataX.push(element.maxWeight);
            console.log(element.maxWeight, graphDataX)
            graphDataY.push(element.date);
            graphData.push({x: new Date(element.date), y: element.maxWeight})


            
            
          }
          
        });
        
        this.update(graphData, graphDataX, graphDataY, data)
        
        
      
      });
      
      
    })
    
  
    


    
  }
  

  
      
  public lineChartData:Array<any> = [
    
    {data: [[100,80],[50,90]], label: ' 2'},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        ticks: {
          beginAtZero: true,
          
          
          
          callback: label => {
            console.log("asdasdasd12312312")
            
            return `${new Date(label).getDate()}/${new Date(label).getMonth()+1} @ ${new Date(label).getHours()}:${new Date(label).getMinutes()}`
          }
        }
      }]
    }
  };

  public  toggleDistribution(): void{
    if (this.series){
      this.lineChartOptions.scales.xAxes[0].distribution = 'linear'
      console.log("linear")

    } else if (!this.series){
      this.lineChartOptions.scales.xAxes[0].distribution = 'series'
      console.log("series", this.lineChartOptions.scales.xAxes)
    }
    this.series=!this.series;
    console.log("the labels",this.lineChartLabels);
    (<any>this.chart).refresh()
    


  }






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
  


  public update(graphData, graphDataX, graphDataY, data):void {
    console.log(this.chart.datasets, "this.chart.datasets")
    this.chart.datasets = [ {data: graphData, label: data}];
    //this.lineChartLabels = graphDataY;
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
