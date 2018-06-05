import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-immortals',
  templateUrl: './immortals.component.html',
  styleUrls: ['./immortals.component.css']
})
export class ImmortalsComponent implements OnInit {
  private _opened: boolean = false;
  players:Array<any>;
  selectedPlayer:String;

  constructor() { }

  ngOnInit() {
    var url1=Array();
    url1.push('Chipper Jones');
    url1.push('Babe Ruth');
    this.players=url1;
    this.selectedPlayer="Select an Immortal"
  }

  update(temp){
    this.selectedPlayer=temp;
  }

}
