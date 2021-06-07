import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MineComponent } from "./mine/mine.component";
import { BuyComponent } from "./buy/buy.component";
import { SellComponent } from "./sell/sell.component";
import { BrowseComponent } from "./browse/browse.component";
import { ShowOneComponent } from "./show-one/show-one.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "mine", component: MineComponent },
  { path: "buy", component: BuyComponent },
  { path: "sell", component: SellComponent },
  { path: "browse", component: BrowseComponent },
  { path: "browse/:id", component: ShowOneComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
