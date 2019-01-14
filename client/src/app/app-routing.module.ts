import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MockyComponent} from "./mocky/mocky/mocky.component";

const routes: Routes = [
  { path: '', redirectTo: '/mocky', pathMatch: 'full' },
  {
    path: 'mocky',
    component: MockyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
