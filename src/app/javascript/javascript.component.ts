import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('JavaScript - Interactive Notes');
  }

  ngOnInit() {
  }

}
