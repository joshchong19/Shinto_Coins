import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ShintoService } from "../shinto.service";

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _shintoService: ShintoService
  ) {}

  id:number;
  transaction:any;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params["id"];
    })
    this.transaction = this._shintoService.getOneTransaction(this.id);
  }

  goBack(){
    this._router.navigate(["/browse"]);
  }

}
