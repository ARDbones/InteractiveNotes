import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-extjs',
  templateUrl: './extjs.component.html',
  styleUrls: ['./extjs.component.css']
})
export class ExtjsComponent implements OnInit {

  constructor(private titleService: Title) {
    let self = this;
    titleService.setTitle('Ext JS - Interactive Notes');
  }

  ngOnInit() {
  }

  goTop(){
    $('html,body').scrollTop(0);
  }

}
