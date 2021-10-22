import { Component, OnInit } from '@angular/core';
//import {Scanner} from 'java.util'

@Component({
  selector: 'app-bmi-cal',
  templateUrl: './bmi-cal.component.html',
  styleUrls: ['./bmi-cal.component.scss']
})
export class BmiCalComponent implements OnInit {

  heightClassEnable:boolean=false; // boolean heightClassEnable = false;
  weightClassEnable:boolean=false;
  submitDisable:boolean = true;
  feetDisable:boolean = true;
  cmDisable:boolean = true;
  lbsDisable:boolean = true;
  kgsDisable:boolean = true;
  heightInCM:number = 0;
  weightInKG:number = 0;

  height:number=0;
  weight:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onHeight(event:any){

    this.height = event.target.value;
    console.log(this.height);
    if(this.height !=0 ){
      this.feetDisable = false;
      this.cmDisable = false;
    }
    if(!this.height){
      this.feetDisable = true;
      this.cmDisable = true;
    }

    if(!this.cmDisable && !this.feetDisable && !this.kgsDisable && !this.kgsDisable){
      this.submitDisable = false;
    }else{
      this.submitDisable = true;
    }
    
  }

  onWeight(event:any){
    this.weight = event.target.value;
    console.log(this.weight);
    if(this.weight !=0 ){
      this.lbsDisable = false;
      this.kgsDisable = false;
    }
    if(!this.weight){
      this.lbsDisable = true;
      this.kgsDisable = true;
    }

    if(!this.cmDisable && !this.feetDisable && !this.kgsDisable && !this.kgsDisable){
      this.submitDisable = false;
    }else{
      this.submitDisable = true;
    }
    
  }

  getHeightByFeet(event:any){

    this.heightClassEnable=true;
    

  }

  getHeightByCM(event:any){
    this.heightClassEnable=false;
    this.heightInCM = event.target.value;
    
  }

  getWeightByKgs(event:any){
    this.weightClassEnable=true;
  }

  getWeightByLBS(event:any){
    this.weightClassEnable=false;
  }

}
