import { Component, OnInit } from '@angular/core';
import { tab } from './../../models/tab'
import { CommonModule } from '@angular/common';
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
    for (let i = 0; i < 50; i++) {
      //this.tab.push({ value: Math.floor(Math.random() * 200), active: false, color: 'blue' });
      this.tab.push(Math.floor(Math.random() * 200));
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //Mon propre algo de tri basique pour comparer (par insertion ?)
  async sort(tab) {
    let smallest;
    for (let i = 0; i < tab.length; i++) {
      smallest = tab[i];
      for (let j = i + 1; j < tab.length; j++) {
        if (tab[j] < smallest) {
          await this.sleep(0.01);
          let tmp = tab[j];
          tab[j] = smallest;
          tab[i] = tmp;
          smallest = tmp;

          this.tab = tab;
        }
      }
    }
    this.tab = tab;
  }

  //Algorithme de tri à bulles
  async sortBubble(tab) {
    let isSwapped
    do {
      isSwapped = false;
      for (let i = 0; i < tab.length; i++) {
        if (tab[i] > tab[i + 1]) {
          await this.sleep(0.01);
          let tmpLeft = tab[i];
          tab[i] = tab[i + 1];
          tab[i + 1] = tmpLeft;
          isSwapped = true;
        }
      }
    } while (isSwapped);
  }

  //Algorithme de tri fusion
  async sortFusion(tab) {
    if (tab.length > 1) {
      let middleIndex = Math.floor(tab.length / 2)
      let leftSide = tab.slice(0, middleIndex)
      let rightSide = tab.slice(middleIndex)
      this.sortFusion(leftSide)
      this.sortFusion(rightSide)
      let leftIndex = 0, rightIndex = 0, globalIndex = 0
      while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
        await this.sleep(10);
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
        await this.sleep(10);
        tab[globalIndex] = leftSide[leftIndex];
        leftIndex++;
        globalIndex++;
      }
      while (rightIndex < rightSide.length) {
        await this.sleep(10);
        tab[globalIndex] = rightSide[rightIndex];
        rightIndex++;
        globalIndex++;
      }
    }
    this.tab = tab;
  }

  //Appel de l'algo de fusion pour chrono à cause de la récursivité
  public callSortFusion(tab) {
    this.sortFusion(tab);
  }

  //Algorithme de tri rapide
  public async quickSortIterative(arr) {
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack[stack.length - 1] >= 0) {
      await this.sleep(100);
      let end = stack.pop();
      let start = stack.pop();

      let pivotIndex = this.partition(arr, start, end);

      if (pivotIndex - 1 > start) {
        stack.push(start);
        stack.push(pivotIndex - 1);
      }
      if (pivotIndex + 1 < end) {
        stack.push(pivotIndex + 1);
        stack.push(end);
      }
    }
  }

  public partition(arr, start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
  };

  //Appel de l'algo de rapide pour chrono à cause de la récursivité
  public callSortQuick(tab) {
    this.quickSortIterative(tab);
  }


}
