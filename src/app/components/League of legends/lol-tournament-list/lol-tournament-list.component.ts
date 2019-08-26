import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/tournament';
import { LolService } from 'src/app/services/lol.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-lol-tournament-list',
  templateUrl: './lol-tournament-list.component.html',
  styleUrls: ['./lol-tournament-list.component.css']
})
export class LolTournamentListComponent implements OnInit {

  tournaments: Array<Tournament>;
  
  constructor(private lolService: LolService, public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.lolService.listAllTournaments().subscribe(data => {this.tournaments=data; });
  }

}
