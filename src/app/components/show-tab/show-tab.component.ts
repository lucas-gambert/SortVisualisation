import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-tab',
  templateUrl: './show-tab.component.html',
  styleUrls: ['./show-tab.component.css']
})
export class ShowTabComponent implements OnInit {

  constructor() { }

  public tab = [];

  ngOnInit(): void {
    this.initTab();
    console.log(this.tab);
  }

  public initTab() {
    for (let i = 0; i < 10; i++) {
      this.tab.push(Math.floor(Math.random() * 10));
    }


  }

}
