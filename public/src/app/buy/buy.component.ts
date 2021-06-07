import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ShintoService } from "../shinto.service";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _shintoService: ShintoService
  ) {}

  balance:number = this._shintoService.showBalance();
  amount:number;

  ngOnInit() {
  }

  Buy(){
    console.log(this._shintoService.balance);
    for(var i = 0; i < this.amount; i++){
      this._shintoService.addToBalance(1);
    }
    this._shintoService.addToHistory({id: this._shintoService.id, action: "Bought", amount: this.amount});
    this._router.navigate(["/home"]);
  }
}
