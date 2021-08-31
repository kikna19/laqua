import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LaquaHomeComponent} from "./laqua-home/laqua-home.component";
import {LaquaAquariumComponent} from "./laqua-routing/laqua-aquarium/laqua-aquarium.component";
import {LaquaTerrariumComponent} from "./laqua-routing/laqua-terrarium/laqua-terrarium.component";
import {LaquaFeedingComponent} from "./laqua-routing/laqua-feeding/laqua-feeding.component";
import {LaquaEmailComponent} from "./laqua-routing/laqua-email/laqua-email.component";
import {MarineComponent} from "./laqua-routing/marine/marine.component";


const routes: Routes = [
  {path: '', component: LaquaHomeComponent},
  {path: 'aquarium', component: LaquaAquariumComponent},
  {path: 'terrarium', component: LaquaTerrariumComponent},
  {path: 'feeding', component: LaquaFeedingComponent},
  {path: 'email', component: LaquaEmailComponent},
  {path: 'marine', component: MarineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
