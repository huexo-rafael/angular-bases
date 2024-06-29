import { Component } from "@angular/core";


@Component({
  selector:'app-counter',
  template:`
  <h3>{{ counter}}</h3>
<p>Bienvenidos a Angular</p>
<button (click)="increaseBy(1)" >+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent{

  public counter:number=10;

  increaseBy(value:number):void{
    this.counter +=value;
  }

  resetCounter(){
    this.counter=10;
  }


}