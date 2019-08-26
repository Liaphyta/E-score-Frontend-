import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/tournament';
import { Dota2Service } from 'src/app/services/dota2.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-dota2-tournament-list',
  templateUrl: './dota2-tournament-list.component.html',
  styleUrls: ['./dota2-tournament-list.component.css']
})
export class Dota2TournamentListComponent implements OnInit {
  tournaments: Array<Tournament>;
  constructor(private dota2Service: Dota2Service, public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.dota2Service.listAllTournaments().subscribe(data => {this.tournaments=data; });
  }

}
