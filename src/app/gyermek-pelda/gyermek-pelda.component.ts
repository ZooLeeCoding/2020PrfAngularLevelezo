import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'gyermek-pelda',
  templateUrl: './gyermek-pelda.component.html',
  styleUrls: ['./gyermek-pelda.component.css']
})
export class GyermekPeldaComponent implements OnInit {

  @Input('child-title')
  title: string;

  @Output()
  childMsg: EventEmitter<string> = new EventEmitter<string>();

  msg() {
    this.childMsg.emit('üzenet jött a gyermektől');
  }

  constructor() { }

  ngOnInit() {
  }

}
