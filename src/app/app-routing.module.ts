import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LolMatchesListComponent } from './lol-matches-list/lol-matches-list.component';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  { path: '' , component: HomepageComponent},
  { path: 'matches', component: LolMatchesListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
