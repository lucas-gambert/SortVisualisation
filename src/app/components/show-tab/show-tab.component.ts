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
    this.tab = [];
    for (let i = 0; i < 500; i++) {
      //this.tab.push({ value: Math.floor(Math.random() * 200), active: false, color: 'blue' });
      this.tab.push(Math.floor(Math.random() * 200));
    }
  }

  //Mon propre algo de tri basique pour comparer (par insertion ?)
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

          this.tab = tab;
        }

      }
    }
    this.tab = tab;
    let end = performance.now();
    console.log(end);
    this.time = end - start;
  }

  //Algorithme de tri à bulles
  public sortBubble(tab) {
    let start = performance.now();
    console.log(start);

    let isSwapped
    do {
      isSwapped = false;
      for (let i = 0; i < tab.length; i++) {
        setTimeout(() => { }, 100000);
        if (tab[i] > tab[i + 1]) {
          let tmpLeft = tab[i];
          tab[i] = tab[i + 1];
          tab[i + 1] = tmpLeft;
          isSwapped = true;
        }
      }
    } while (isSwapped);

    let end = performance.now();
    console.log(end);
    this.time = end - start;
  }

  //Algorithme de tri fusion
  public sortFusion(tab) {
    if (tab.length > 1) {
      let middleIndex = Math.floor(tab.length / 2)
      let leftSide = tab.slice(0, middleIndex)
      let rightSide = tab.slice(middleIndex)
      this.sortFusion(leftSide)
      this.sortFusion(rightSide)
      let leftIndex = 0, rightIndex = 0, globalIndex = 0
      while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
        setTimeout(() => { }, 100000);
        if (leftSide[leftIndex] < rightSide[rightIndex]) {
          tab[globalIndex] = leftSide[leftIndex];
          leftIndex++;
        } else {
          tab[globalIndex] = rightSide[rightIndex];
          rightIndex++;
        }
        globalIndex++;
      }
      while (leftIndex < leftSide.length) {
        setTimeout(() => { }, 100000);
        tab[globalIndex] = leftSide[leftIndex];
        leftIndex++;
        globalIndex++;
      }
      while (rightIndex < rightSide.length) {
        setTimeout(() => { }, 100000);
        tab[globalIndex] = rightSide[rightIndex];
        rightIndex++;
        globalIndex++;
      }
    }
    this.tab = tab;
  }

  //Algorithme de tri rapide
  public sortQuick(tab) {
    if (tab.length < 2) {
      return tab;
    }

    let pivot = tab[0];
    let lesserArray = [];
    let greaterArray = [];

    for (let i = 1; i < tab.length; i++) {
      setTimeout(() => { }, 100000);
      if (tab[i] > pivot) {
        greaterArray.push(tab[i]);
      } else {
        lesserArray.push(tab[i]);
      }
    }

    return this.sortQuick(lesserArray).concat(pivot, this.sortQuick(greaterArray));
  }

  //Appel de l'algo de fusion pour chrono
  public callSortFusion(tab) {
    let start = performance.now();
    console.log(start);

    this.sortFusion(tab);

    let end = performance.now();
    console.log(end);
    this.time = end - start;
  }

  //Appel de l'algo de rapide pour chrono
  public callSortQuick(tab) {
    let start = performance.now();
    console.log(start);

    this.tab = this.sortQuick(tab);

    let end = performance.now();
    console.log(end);
    this.time = end - start;
  }

}
