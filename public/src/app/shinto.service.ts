import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShintoService {

  constructor(private _shinto:HttpClient) { }
  history = [];
  balance:number = 0;
  isAvail:boolean;
  id:number = 1;
  algos = [{},{question:"What is the third number of the fibonacci sequence?", answer: 1}, {question: "What does 2 % 0 equal to in javascript?", answer: 0},  {question: "Given the array (var array = [1,2,3,4]), which value would array.pop() remove?", answer: 4}];

  shareHistory(){
    return this.history;
  }

  getOneTransaction(id:number){
    return this.history[id - 1];
  }

  addToHistory(obj){
    this.history.push(obj);
    this.id ++;
  }

  addToBalance(num:number){
    this.balance += num;
  }

  showBalance(){
    return this.balance;
  }

  checkBalance(num:number){
    if(this.balance >= num){
      this.isAvail = true;
      return true;
    }
    return false;
  }

  removeFromBalance(num:number){
    this.balance -= num;
  }

  getAlgo(num){
    return this.algos[num];
  }

  checkAlgo(num,answer){
    if(this.algos[num].answer == answer){
      return true;
    }
    return false;
  }
}
