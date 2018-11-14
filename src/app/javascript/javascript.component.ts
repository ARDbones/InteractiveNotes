import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

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

  showTS(){
    var x = document.getElementsByClassName("hiddenTS");
    for(var i = 0; i < x.length; i++){
      if (x[i]['style'].display === "none") {
        x[i]['style'].display = "block";
      } else {
        x[i]['style'].display = "none";
      }
    }
  }

  goTop(){
    $('html,body').scrollTop(0);
  }

}
