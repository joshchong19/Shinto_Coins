import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ShintoService } from "../shinto.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _shintoService: ShintoService
  ) {}

  balance:number = this._shintoService.showBalance();
  amount:number;
  error:string;

  ngOnInit() {
  }

  Sell(){
    if(this._shintoService.checkBalance(this.amount)){
      this._shintoService.removeFromBalance(this.amount);
      this._shintoService.addToHistory({id: this._shintoService.id, action: "Sold", amount: this.amount});
      this._router.navigate(["/home"]);
    }
    else{
      this.error = "Not Enough ShintoCoins";
    }
  }

}
