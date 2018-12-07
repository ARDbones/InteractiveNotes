import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  goTop(){
    $('html,body').scrollTop(0);
  }
}
