import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(private titleService: Title) {
    let self = this;
    titleService.setTitle('Angular - Interactive Notes');
  }

  ngOnInit() {
  }

  goTop(){
    $('html,body').scrollTop(0);
  }

}
