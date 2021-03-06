import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-switch',
  templateUrl: './map-switch.component.html',
  styleUrls: ['./map-switch.component.css']
})
export class MapSwitchComponent implements OnInit {

  @Input() customPosition:object;
  @Input() switchArray:Array<any>;
  selectId = 0;//当前选中的选项.
/*
  switchArray = [{
    "name": "操作",
    "icon": "icon-operation"
  }, {
    "name": "展示",
    "icon": "icon-demonstration"
  }, {
    "name": "展示二",
    "icon": "icon-demonstration"
  }, {
    "name": "展示三",
    "icon": "icon-demonstration"
  }];
*/

  select(i) {
    this.selectId = i;
    //console.log("当前选中" + i + "#######" + this.switchArray[i].name);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
