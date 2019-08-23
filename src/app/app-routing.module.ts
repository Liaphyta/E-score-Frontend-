import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LolUMatchesListComponent } from './components/League of legends/lol-umatches-list/lol-umatches-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LolPmatchesListComponent } from './components/League of legends/lol-pmatches-list/lol-pmatches-list.component';
import { LolTournamentListComponent } from './components/League of legends/lol-tournament-list/lol-tournament-list.component';
import { Dota2UMatchesListComponent } from './components/Dota2/dota2-umatches-list/dota2-umatches-list.component';
import { Dota2PmatchesListComponent } from './components/Dota2/dota2-pmatches-list/dota2-pmatches-list.component';
import { Dota2TournamentListComponent } from './components/Dota2/dota2-tournament-list/dota2-tournament-list.component';

const routes: Routes = [
  { path: '' , component: HomepageComponent},
  { path: 'lolUmatches', component: LolUMatchesListComponent},
  { path: 'lolPmatches', component: LolPmatchesListComponent},
  { path: 'lolTournaments', component: LolTournamentListComponent},
  { path: 'dota2Umatches', component:Dota2UMatchesListComponent},
  { path: 'dota2Pmatches', component: Dota2PmatchesListComponent },
  { path: 'dota2Tournaments', component: Dota2TournamentListComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
