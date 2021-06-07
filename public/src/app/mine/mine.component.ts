import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ShintoService } from "../shinto.service";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _shintoService: ShintoService
  ) {}
  answer:number;
  balance:number;
  algorithm:any;
  algonum: number;
  error:string;
  transaction:any;

  ngOnInit() {
    var randnum = Math.floor((Math.random() * 3) + 1);
    this.algorithm = this._shintoService.getAlgo(randnum).question;
    this.balance = this._shintoService.showBalance();
    this.algonum = randnum;
    this.transaction = {id: "", action: "", amount: ""};
  }

  Mine(){
    if(this._shintoService.checkAlgo(this.algonum,this.answer)){
      this._shintoService.addToBalance(1);
      this._shintoService.addToHistory({id: this._shintoService.id, action: "Mined", amount: 1});
      this._router.navigate(["/home"]);
    }
    else{
      this.error = "Wrong Answer";
      this._router.navigate(["/mine"]);
    }
  }
}
