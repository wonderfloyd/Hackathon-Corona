import { Component, OnInit } from '@angular/core';

console.log('src/app/calculator/calculator.component.ts');

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public number1: number;
  public number2: number;
  public result: number;

  constructor() { }

  ngOnInit() {
  }

  public add() {
    this.result = this.number1 + this.number2;
    console.log(this.number1 + ' + ' + this.number2 + ' = ' + this.result);
  }

}
