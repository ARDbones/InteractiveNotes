import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.css']
})
export class IonicComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Ionic - Interactive Notes');
  }

  ngOnInit() {
  }

  goTop() {
    $('html,body').scrollTop(0);
  }

}
