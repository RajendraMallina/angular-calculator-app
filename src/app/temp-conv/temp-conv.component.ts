import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-conv',
  templateUrl: './temp-conv.component.html',
  styleUrls: ['./temp-conv.component.scss']
})
export class TempConvComponent implements OnInit {

  fvalue :number;
  cvalue :number;
  
  constructor() { 
    this.cvalue = 0;
    this.fvalue = 0;
  }

  ngOnInit(): void {
    this.fvalue = (this.cvalue * (9/5) + 32);
  }

  onKeyFKey(event: any){

    console.log(event.target.value);

    this.cvalue = (event.target.value - 32) * 0.5556;

    
  }

  onKeyCKey(event: any){

    this.fvalue = (event.target.value * (9/5) + 32);
  }

}
