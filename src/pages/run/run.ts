import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {
  GoogleMaps,

  GoogleMap,
  LatLng,
  CameraPosition,
  GoogleMapsEvent,
  GoogleMapOptions,
  MarkerOptions,
  Marker, Polyline
} from '@ionic-native/google-maps';
import { Geolocation } from "@ionic-native/geolocation"
import { TimerComponent } from "../../components/timer/timer";
import * as geometry from 'spherical-geometry-js';
import {watch} from "@ionic/app-scripts";
import {Subscription} from "rxjs/Subscription";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-run',
  templateUrl: 'run.html',
})
export class RunPage {
  dist: number;
  speed: number;

  lastPos: LatLng;
  nextPos: LatLng;
  start:boolean = false;
  finish: boolean = false;
  subscript: Subscription;



  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  tracking_data =  [];
  poly: Polyline;




  constructor(private googleMaps: GoogleMaps,
              private geoLoc: Geolocation,
              private ev: Events,
              private storage: Storage) {
                

    

  }

  ionViewDidEnter(){
    console.log("ionviewenter run.ts")
    this.eventListener();
    
  };
  eventListener(){
    this.ev.subscribe('finished', data => {
      console.log("timerdata: ",data);
      console.log("dist ", this.dist);
      let myDate = new Date();;
      let jsonObj = {"Distance": this.dist, "Time": data, "Date":myDate.getDate(), "Month":myDate.getMonth(), "Year":myDate.getFullYear()};
      let raNum = Math.random()*10;
      let name = raNum +"";
      this.storage.set(name, jsonObj).then((val)=>{
       console.log("nineynine ",val)
      });
      this.storage.get(name).then((val)=>{
        console.log("them values ",val)
      })
      
    });

  }
  ionViewWillUnload():void {
    this.ev.unsubscribe('finished');
    }

  

  ngAfterViewInit(){
    let loc: LatLng;
    this.start = false;
    this.initMap();



    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {


      this.getLocation().then( res => {
        console.log("latitude: ",res.coords.latitude, " longitude: ", res.coords.longitude)
        //get current location and set camera into posotion
        loc = new LatLng(res.coords.latitude, res.coords.longitude);
        this.lastPos = loc;
        this.moveCamera(loc);
        //create a marker at start point
        this.createMarker(loc,"Start").then((marker: Marker) => {
          marker.showInfoWindow();
        }).catch(err => {
          console.log(err);
        })
      }).catch( err => {
        console.log(err);
      });
    })
  }


  initMap(){
    let element = this.mapElement.nativeElement;
    this.map = this.googleMaps.create(element)
  }
  getLocation(){
    return this.geoLoc.getCurrentPosition()
  }
  moveCamera(loc: LatLng){
    let options: CameraPosition<any> = {
      target: loc,
      zoom: 15,
      tilt: 10
    };
    this.map.moveCamera(options)
  }
  createMarker(loc: LatLng, title: string){
    let markerOptions: MarkerOptions = {
      position: loc,
      title: title
    };
    return this.map.addMarker(markerOptions);
  }
  getPath(){
    this.start = true;
    this.finish = true;

    this.ev.publish('start');
    this.dist= 0;
    let geo_options = {
      enableHighAccuracy: true,
    };
    let watch = this.geoLoc.watchPosition(geo_options);
    this.subscript = watch.subscribe((data) => {
      console.log("yodle",data);
      this.nextPos = new LatLng(data.coords.latitude, data.coords.longitude)
      this.dist += geometry.computeDistanceBetween(this.lastPos, this.nextPos);

      console.log("meters: ",  geometry.computeDistanceBetween(this.lastPos, this.nextPos));
      // this.dist += gps_distance(this.lastPos.lat, this.lastPos.lng, this.nextPos.lat, this.nextPos.lng)
      //this.tracking_data.push(new LatLng(data.coords.latitude, data.coords.longitude));
      this.speed = data.coords.speed;
      this.addPath();
    });

  }


  endPath(){
    this.subscript.unsubscribe();
    console.log("fix later");
    this.finish = false;
    this.ev.publish('finish')

  }

  addPath(){
    console.log("lastpos ", this.lastPos,"nextpos ", this.nextPos);
    let line  = this.map.addPolyline({
      points: [this.lastPos, this.nextPos],
      'color' : '#FF00FF',
      'width': 10,
      'geodesic': true,


    });
    console.log("line ",line);
    this.lastPos = this.nextPos;
  }






}



