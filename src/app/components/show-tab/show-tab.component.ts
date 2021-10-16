import { Component, OnInit } from '@angular/core';
import { tab } from './../../models/tab'

import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-show-tab',
  templateUrl: './show-tab.component.html',
  styleUrls: ['./show-tab.component.css']
})
export class ShowTabComponent implements OnInit {

  constructor() { }

  //tab: tab[];
  public tab;
  public time;

  ngOnInit(): void {
    this.tab = [];

    this.initTab();
  }

  public initTab() {
    for (let i = 0; i < 500; i++) {
      //this.tab.push({ value: Math.floor(Math.random() * 200), active: false, color: 'blue' });
      this.tab.push(Math.floor(Math.random() * 200));
    }
  }

  //Mon propre algo de tri basique pour comparer
  public sort(tab) {
    let start = performance.now();
    console.log(start);
    let smallest;
    for (let i = 0; i < tab.length; i++) {
      smallest = tab[i];
      for (let j = i + 1; j < tab.length; j++) {
        setTimeout(() => { }, 100000);
        if (tab[j] < smallest) {
          let tmp = tab[j];
          tab[j] = smallest;
          tab[i] = tmp;
          smallest = tmp;
        }
      }
    }
    this.tab = tab;
    let end = performance.now();
    console.log(end);
    this.time = end - start;
  }

}
