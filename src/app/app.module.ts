import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolUMatchesListComponent } from './components/League of legends/lol-umatches-list/lol-umatches-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { LolService } from './services/lol.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LolPmatchesListComponent } from './components/League of legends/lol-pmatches-list/lol-pmatches-list.component';
import { LolTournamentListComponent } from './components/League of legends/lol-tournament-list/lol-tournament-list.component';
import { Dota2PmatchesListComponent } from './components/Dota2/dota2-pmatches-list/dota2-pmatches-list.component';
import { Dota2UMatchesListComponent } from './components/Dota2/dota2-umatches-list/dota2-umatches-list.component';
import { Dota2TournamentListComponent } from './components/Dota2/dota2-tournament-list/dota2-tournament-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LolUMatchesListComponent,
    HomepageComponent,
    LolPmatchesListComponent,
    LolTournamentListComponent,
    Dota2PmatchesListComponent,
    Dota2UMatchesListComponent,
    Dota2TournamentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
