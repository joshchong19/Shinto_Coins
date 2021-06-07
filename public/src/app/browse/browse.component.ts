import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ShintoService } from "../shinto.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _shintoService: ShintoService
  ) {}

  history:any;

  ngOnInit() {
    this.history = this._shintoService.shareHistory();
  }

  showOne(id:number){
    this._router.navigate([`/browse/${id}`]);
  }

}
